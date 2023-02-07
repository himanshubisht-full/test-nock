import { render } from '@testing-library/react';
import App from './App';

describe('', () => {
  it('should contain user', async () => {
    let { container } = render(<App />)
    expect(container.querySelector('h1').textContent).toBe('Users')
  })
})