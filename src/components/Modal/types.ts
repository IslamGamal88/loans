export interface Props {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  totalAvailable: number;
}
