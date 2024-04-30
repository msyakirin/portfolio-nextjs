// PdfViewerComponent.tsx
interface PdfViewerProps {
  pdfFileURL: string;
  onDownload?: () => void;
}

const PdfViewerComponent: React.FC<PdfViewerProps> = ({ pdfFileURL, onDownload }) => {
  return (
    <div>
      {/* Render PDF viewer component */}
      <button onClick={onDownload}>Download CV</button>
    </div>
  );
};

export default PdfViewerComponent;
