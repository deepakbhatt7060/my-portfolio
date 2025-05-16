import { Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import Box from "@mui/material/Box";
import useAudio from "@/hooks/useAudio";

export type DownloadButtonProps = {
  downloadName: string;
  downloadHref: string;
};

const DownloadButton = ({
  downloadName,
  downloadHref,
}: DownloadButtonProps) => {
  const { handleAudioPlay } = useAudio({});
  const handleDownload = (name: string, href: string) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = name;
    link.click();
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          gap: 1,
          color: "lightblue",
        }}
        onClick={(e) => {
          handleDownload(downloadName, downloadHref);
          handleAudioPlay(e);
        }}
      >
        <Download />
        <Typography variant="body1">Download</Typography>
      </Box>
    </Box>
  );
};
export default DownloadButton;
