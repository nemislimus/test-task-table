import type { Developer } from '../types/developer';

export const mockDevelopers: Developer[] = [
  {
    id: '1', name: 'Иван Петров', skillLevel: 'senior',
    tasks: [
      { id: 't1', title: 'Рефакторинг API', description: 'Переписать устаревшие endpoints', priority: 'high', status: 'in process' },
      { id: 't2', title: 'Добавить тесты', description: 'Покрыть модуль тестами', priority: 'medium', status: 'todo' },
      { id: 't3', title: 'Оптимизация БД', description: 'Добавить индексы для частых запросов', priority: 'high', status: 'on review' }
    ]
  },
  {
    id: '2', name: 'Мария Сидорова', skillLevel: 'middle',
    tasks: [
      { id: 't4', title: 'Исправить баг в UI', description: 'Кнопка не реагирует на клик', priority: 'medium', status: 'done' },
      { id: 't5', title: 'Доработка формы', description: 'Добавить валидацию полей', priority: 'low', status: 'in process' }
    ]
  },
  {
    id: '3', name: 'Алексей Козлов', skillLevel: 'junior', 
    tasks: [
      { id: 't6', title: 'Изучение документации', description: 'Разобраться с новой библиотекой', priority: 'low', status: 'done' }
    ]
  },
  {
    id: '4', name: 'Екатерина Волкова', skillLevel: 'middle',
    tasks: [
      { id: 't7', title: 'Дизайн лендинга', description: 'Сверстать главную страницу', priority: 'medium', status: 'in process' },
      { id: 't8', title: 'Адаптивная верстка', description: 'Настроить мобильную версию', priority: 'high', status: 'todo' }
    ]
  },
  {
    id: '5', name: 'Дмитрий Орлов', skillLevel: 'senior',
    tasks: [
      { id: 't9', title: 'Архитектура микросервисов', description: 'Спроектировать взаимодействие сервисов', priority: 'high', status: 'on review' },
      { id: 't10', title: 'Code review', description: 'Проверить PR младших разработчиков', priority: 'medium', status: 'in process' }
    ]
  },
  {
    id: '6', name: 'Ольга Новикова', skillLevel: 'lead',
    tasks: [
      { id: 't11', title: 'Планирование спринта', description: 'Распределить задачи по команде', priority: 'medium', status: 'done' },
      { id: 't12', title: 'Встреча с заказчиком', description: 'Обсудить новые требования', priority: 'high', status: 'todo' },
      { id: 't13', title: 'Анализ метрик', description: 'Оценить производительность системы', priority: 'medium', status: 'in process' }
    ]
  },
  {
    id: '7', name: 'Павел Морозов', skillLevel: 'middle',
    tasks: [
      { id: 't14', title: 'Интеграция с API', description: 'Подключить сторонний сервис', priority: 'high', status: 'on review' },
      { id: 't15', title: 'Написание документации', description: 'Описать работу модуля', priority: 'low', status: 'done' }
    ]
  },
  {
    id: '8', name: 'Анна Ковалева', skillLevel: 'junior',
    tasks: [
      { id: 't16', title: 'Исправление опечаток', description: 'Поправить тексты в интерфейсе', priority: 'low', status: 'done' }
    ]
  },
  {
    id: '9', name: 'Сергей Павлов', skillLevel: 'senior',
    tasks: [
      { id: 't17', title: 'Оптимизация кода', description: 'Ускорить работу алгоритма', priority: 'high', status: 'in process' },
      { id: 't18', title: 'Менторинг', description: 'Помощь новым разработчикам', priority: 'medium', status: 'on review' }
    ]
  },
  {
    id: '10', name: 'Наталья Семенова', skillLevel: 'middle',
    tasks: [
      { id: 't19', title: 'Тестирование функционала', description: 'Проверить новые фичи', priority: 'medium', status: 'done' },
      { id: 't20', title: 'Багрепорт', description: 'Составить отчет об ошибках', priority: 'low', status: 'todo' }
    ]
  }
];