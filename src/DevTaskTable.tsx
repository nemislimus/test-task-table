import { useEffect } from 'react';
import { useTableStore } from '@/store/tableStore';
import { Button } from '@/components/ui/button';
import { DynamicTableRow } from '@/DynamicTableRow.tsx';
import {
    Table,
    TableBody,
    TableHeader,
} from '@/components/ui/table';

export const DevTaskTable = () => {
    const { currentView, developers, selectedDeveloper, selectDeveloper, resetView, loadMockData } = useTableStore();

    useEffect(() => {
        loadMockData();
    }, [loadMockData]);

    return (
        <div className="container mx-auto p-4">
            {/* Заголовок */}
            <h2 className="text-2xl font-bold mb-4">
                {currentView === 'developers'
                    ? 'Developers'
                    : `Tasks of: ${selectedDeveloper?.name}`
                }
            </h2>

            {/* Таблица */}
            {currentView === 'developers' && (
                <div>
                    <Table>
                        <TableHeader>
                            <DynamicTableRow
                                isHeader
                                bgColor="#e3cca6"
                                items={['ID', 'Name', 'Level', 'Tasks Count']}
                            />
                        </TableHeader>
                        <TableBody>
                            {developers.map((developer) => (
                                <DynamicTableRow
                                    key={developer.id}
                                    items={[
                                        developer.id,
                                        developer.name,
                                        developer.skillLevel,
                                        developer.tasks.length.toString()
                                    ]}
                                    onRowClick={() => selectDeveloper(developer)}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            {currentView === 'tasks' && selectedDeveloper && (
                <div>
                    <Table>
                        <TableHeader>
                            <DynamicTableRow
                                isHeader
                                bgColor="#e3cca6"
                                items={['ID', 'Title', 'Description', 'Status']}
                            />
                        </TableHeader>
                        <TableBody>
                            {selectedDeveloper.tasks.map((task) => (
                                <DynamicTableRow
                                    key={task.id}
                                    items={[
                                        task.id,
                                        task.title,
                                        task.description,
                                        task.status
                                    ]}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            {/* Кнопка назад под таблицей */}
            {currentView === 'tasks' && (
                <Button onClick={resetView} className="mt-4">
                    ← Back to Developers
                </Button>
            )}
        </div>
    );
};