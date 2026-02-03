import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Todo from './Todo'

describe('Todo component', () => {
  const todo = { _id: '1', text: 'Test task', done: false }
  const doneTodo = { _id: '2', text: 'Done task', done: true }
  const onDelete = vi.fn()
  const onComplete = vi.fn()

  afterEach(() => cleanup())

  it('muestra el texto de la tarea', () => {
    render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />)
    expect(screen.getByText('Test task')).toBeInTheDocument()
  })

  it('muestra el estado correcto cuando no está hecha', () => {
    render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />)
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  it('muestra el estado correcto cuando está hecha', () => {
    render(<Todo todo={doneTodo} onDelete={onDelete} onComplete={onComplete} />)
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })

  it('llama a onDelete cuando se hace click en Delete', () => {
    render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />)
    fireEvent.click(screen.getAllByText('Delete')[0])
    expect(onDelete).toHaveBeenCalledWith(todo)
  })

  it('llama a onComplete cuando se hace click en Set as done', () => {
    render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('Set as done'))
    expect(onComplete).toHaveBeenCalledWith(todo)
  })
})
