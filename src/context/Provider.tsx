import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/router";

type Experience =
  | "Software Development Engineer - Associate ( Hitachi Vantara )"
  | "Frontend Developer ( FreezeBooking )"
  | "Application Engineering - Intern ( Hitachi Vantara )"
  | string;
export type NavigationContextType = {
  navigation: {
    Home: boolean;
    Projects: boolean;
    // Contact: boolean;
  };
  toggleNavigation: (active: keyof NavigationContextType["navigation"]) => void;
  scroll: number;
  loading: boolean;
  isInteractive: boolean | null;
  setIsInteractive: React.Dispatch<React.SetStateAction<boolean | null>>;
  activeAchievements: "ACHIEVEMENTS" | "CERTIFICATIONS" | string;
  setActiveAchievements: React.Dispatch<
    React.SetStateAction<"ACHIEVEMENTS" | "CERTIFICATIONS" | string>
  >;
  activeProject:
    | "FREEZEBOOKING"
    | "FREEZEBOOKING ADMIN PORTAL"
    | "ASTUTRISE"
    | "HDRS Nxt"
    | string;
  setActiveProject: React.Dispatch<
    React.SetStateAction<
      | "FREEZEBOOKING"
      | "FREEZEBOOKING ADMIN PORTAL"
      | "ASTUTRISE"
      | "HDRS Nxt"
      | string
    >
  >;
  activeExperience: Experience;
  setActiveExperience: React.Dispatch<React.SetStateAction<Experience>>;
};

const context = createContext<NavigationContextType | undefined>(undefined);

type OnRouterEvent = (url: string, options: { shallow: boolean }) => void;

const DELAY_MS = 100;

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const [scroll, setScroll] = useState(0);
  const [navigation, setNavigation] = useState({
    Home: true,
    Projects: false,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isInteractive, setIsInteractive] = useState<boolean | null>(null);
  const [activeAchievements, setActiveAchievements] = useState<
    "ACHIEVEMENTS" | "CERTIFICATIONS" | string
  >("ACHIEVEMENTS");
  const [activeProject, setActiveProject] = useState<
    | "FREEZEBOOKING"
    | "FREEZEBOOKING ADMIN PORTAL"
    | "ASTUTRISE"
    | "HDRS Nxt"
    | string
  >("ASTUTRISE");
  const [activeExperience, setActiveExperience] = useState<Experience>(
    "Software Development Engineer - Associate ( Hitachi Vantara )"
  );

  useEffect(() => {
    const check = localStorage.getItem("isInteractive");
    if (check) {
      setIsInteractive(false);
    } else {
      setIsInteractive(true);
    }
  }, []);

  useEffect(() => {
    const onRouteChangeStart: OnRouterEvent = (url, options) => {
      if (!options?.shallow) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setLoading(true);
      }
    };

    const onRouteChangeComplete: OnRouterEvent = (url, options) => {
      if (!options?.shallow) {
        timeoutRef.current = setTimeout(() => {
          setLoading(false);
        }, DELAY_MS);
      }
    };

    const onRouteChangeError = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setLoading(false);
    };

    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleNavigation = (page: keyof typeof navigation) => {
    setNavigation((prevNavigation) => {
      const updatedNavigation = Object.keys(prevNavigation).reduce(
        (acc, key) => {
          acc[key as keyof typeof prevNavigation] = false;
          return acc;
        },
        {} as typeof prevNavigation
      );
      updatedNavigation[page] = true;

      return updatedNavigation;
    });
    if (page === "Projects") {
      setScroll(-50);
    } else {
      setScroll(0);
    }
  };

  return (
    <context.Provider
      value={{
        navigation,
        toggleNavigation,
        scroll,
        loading,
        isInteractive,
        setIsInteractive,
        activeAchievements,
        setActiveAchievements,
        activeProject,
        setActiveProject,
        activeExperience,
        setActiveExperience,
      }}
    >
      {children}
    </context.Provider>
  );
};

const useNavigation = () => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error("useNavigation must be used within a Provider");
  }
  return contextValue;
};

export default Provider;
export { context, useNavigation };
