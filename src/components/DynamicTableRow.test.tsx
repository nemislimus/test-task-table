import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DynamicTableRow } from './DynamicTableRow';
import { Table, TableBody } from '@/components/ui/table';

describe('DynamicTableRow', () => {
  it('should render header row with correct styles', () => {
    render(
      <Table>
        <TableBody>
          <DynamicTableRow
            isHeader
            bgColor="#e3cca6"
            items={['ID', 'Name', 'Level']}
          />
        </TableBody>
      </Table>
    );

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Level')).toBeInTheDocument();
  });

  it('should render data row with click handler', () => {
    const handleClick = vi.fn();
    
    render(
      <Table>
        <TableBody>
          <DynamicTableRow
            items={['1', 'John', 'senior']}
            onRowClick={handleClick}
          />
        </TableBody>
      </Table>
    );

    const row = screen.getByRole('row');
    fireEvent.click(row);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});