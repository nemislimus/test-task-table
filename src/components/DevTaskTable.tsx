import { useEffect } from 'react';
import { useTableStore } from '@/store/tableStore';
import { Button } from '@/components/ui/button';
import { DynamicTable } from '@/components/DynamicTable';

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
                <div className="border border-stone-200 rounded-lg shadow-sm bg-white overflow-hidden">
                    <DynamicTable
                        columns={['ID', 'Name', 'Level', 'Tasks Count']}
                        data={developers.map(dev => ({
                            id: dev.id,
                            values: [dev.id, dev.name, dev.skillLevel, dev.tasks.length.toString()]
                        }))}
                        onRowClick={(id) => selectDeveloper(developers.find(d => d.id === id)!)}
                        bgColor="#c9b79f"
                    />
                </div>
            )}

            {currentView === 'tasks' && selectedDeveloper && (
                <div className="border border-stone-200 rounded-lg shadow-sm bg-white overflow-hidden">
                    <DynamicTable
                        columns={['ID', 'Title', 'Description', 'Priority', 'Status']} // Исправил опечатку "Preority"
                        data={selectedDeveloper.tasks.map(task => ({
                            id: task.id,
                            values: [task.id, task.title, task.description, task.priority, task.status]
                        }))}
                        bgColor="#ffb759"
                    />
                </div>
            )}

            {/* Кнопка назад под таблицей */}
            {currentView === 'tasks' && (
                <Button onClick={resetView} className="mt-4">
                    Back to Developers
                </Button>
            )}
        </div>
    );
};