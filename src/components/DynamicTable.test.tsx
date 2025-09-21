import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DynamicTable } from './DynamicTable';

describe('DynamicTable', () => {
  it('should render table with columns and data', () => {
    render(
      <DynamicTable
        columns={['ID', 'Name', 'Level']}
        data={[
          { id: '1', values: ['1', 'John', 'senior'] },
          { id: '2', values: ['2', 'Jane', 'middle'] }
        ]}
        bgColor="#e3cca6"
      />
    );

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Level')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('should handle row clicks', () => {
    const handleClick = vi.fn();
    
    render(
      <DynamicTable
        columns={['ID', 'Name']}
        data={[{ id: '1', values: ['1', 'John'] }]}
        onRowClick={handleClick}
        bgColor="#e3cca6"
      />
    );

    const row = screen.getByText('John').closest('tr');
    if (row) {
      fireEvent.click(row);
    }
    
    expect(handleClick).toHaveBeenCalledWith('1');
  });

  it('should render without click handler', () => {
    render(
      <DynamicTable
        columns={['ID', 'Name']}
        data={[{ id: '1', values: ['1', 'John'] }]}
        bgColor="#e3cca6"
      />
    );

    expect(screen.getByText('John')).toBeInTheDocument();
  });
});