import {
  Table,
  TableBody,
  TableHeader,
} from '@/components/ui/table';
import { DynamicTableRow } from '@/DynamicTableRow.tsx';

interface DynamicTableProps {
  columns: string[];
  data: { id: string; values: string[] }[]; // Добавляем объекты с id
  onRowClick?: (id: string) => void;
  bgColor?: string;
}

export const DynamicTable = ({ columns, data, onRowClick, bgColor }: DynamicTableProps) => {
  return (
    <Table>
      <TableHeader>
        <DynamicTableRow
          isHeader
          bgColor={bgColor}
          items={columns}
        />
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <DynamicTableRow
            key={row.id} // Используем id как ключ
            items={row.values}
            onRowClick={onRowClick ? () => onRowClick(row.id) : undefined}
          />
        ))}
      </TableBody>
    </Table>
  );
};