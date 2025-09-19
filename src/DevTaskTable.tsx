import { useEffect } from 'react';
import { useTableStore } from '@/store/tableStore';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
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
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Level</TableHead>
                                <TableHead>Tasks Count</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {developers.map((developer) => (
                                <TableRow
                                    key={developer.id}
                                    onClick={() => selectDeveloper(developer)}
                                    className="cursor-pointer hover:bg-gray-50"
                                >
                                    <TableCell>{developer.id}</TableCell>
                                    <TableCell>{developer.name}</TableCell>
                                    <TableCell>{developer.skillLevel}</TableCell>
                                    <TableCell>{developer.tasks.length}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            {currentView === 'tasks' && selectedDeveloper && (
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {selectedDeveloper.tasks.map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.id}</TableCell>
                                    <TableCell>{task.title}</TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                </TableRow>
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