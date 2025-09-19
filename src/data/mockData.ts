import type { Developer } from '../types/developer';

export const mockDevelopers: Developer[] = [
    {
        id: '1',
        name: 'Иван Петров',
        skillLevel: 'senior',
        tasks: [
            {
                id: 't1',
                title: 'Рефакторинг API',
                description: 'Переписать устаревшие endpoints',
                status: 'in process'
            },
            {
                id: 't2',
                title: 'Добавить тесты',
                description: 'Покрыть модуль тестами',
                status: 'todo'
            }
        ]
    },
    {
        id: '2',
        name: 'Мария Сидорова',
        skillLevel: 'middle',
        tasks: [
            {
                id: 't3',
                title: 'Исправить баг в UI',
                description: 'Кнопка не реагирует на клик',
                status: 'done'
            }
        ]
    }
];