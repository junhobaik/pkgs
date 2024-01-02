import ThemeSwitcher from '../components/ThemeSwitcher';
import { Button } from 'ui';
import 'ui/css';

export default function Home() {
  return (
    <main>
      <div className="buttons">
        <Button>UI Button</Button>
        <ThemeSwitcher />
        <button>Origin Button</button>

        <div>
          <div style={{ backgroundColor: 'var(--theme-color)', color: 'red' }}>--theme-color</div>
          <div style={{ backgroundColor: 'var(--prefer-theme-color)', color: 'red' }}>--prefer-theme-color</div>
        </div>
      </div>
    </main>
  );
}
