import { useEffect } from 'react';
import { useTableStore } from '@/store/tableStore';
import { Button } from '@/components/ui/button';
import { DynamicTable } from '@/DynamicTable.tsx';

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

            {currentView === 'developers' && (
                <DynamicTable
                    columns={['ID', 'Name', 'Level', 'Tasks Count']}
                    data={developers.map(dev => ({
                        id: dev.id,
                        values: [dev.id, dev.name, dev.skillLevel, dev.tasks.length.toString()]
                    }))}
                    onRowClick={(id) => selectDeveloper(developers.find(d => d.id === id)!)}
                    bgColor="#e3cca6"
                />
            )}

            {currentView === 'tasks' && selectedDeveloper && (
                <DynamicTable
                    columns={['ID', 'Title', 'Description', 'Status']}
                    data={selectedDeveloper.tasks.map(task => ({
                        id: task.id,
                        values: [task.id, task.title, task.description, task.status]
                    }))}
                    bgColor="#e3cca6"
                />
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