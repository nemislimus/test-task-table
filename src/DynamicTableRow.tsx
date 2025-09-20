import {
    TableCell,
    TableHead,
    TableRow,
} from '@/components/ui/table';

interface DynamicTableRowProps {
  items: string[];
  isHeader?: boolean;
  bgColor?: string;
  onRowClick?: () => void;
}

export const DynamicTableRow = ({ 
  items, 
  isHeader = false, 
  bgColor, 
  onRowClick 
}: DynamicTableRowProps) => {
  const columnCount = items.length;
  const widthClass = `w-1/${columnCount}`;

  return (
    <TableRow 
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      onClick={onRowClick}
      className={onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
    >
      {items.map((item, index) =>
        isHeader ? (
          <TableHead key={index} className={`${widthClass} text-center`}>
            {item}
          </TableHead>
        ) : (
          <TableCell key={index} className={`${widthClass} text-center text-wrap break-words`}>
            {item}
          </TableCell>
        )
      )}
    </TableRow>
  );
};