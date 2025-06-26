import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity method created by{' '}
            <strong>Francesco Cirillo</strong>, which consists of dividing work
            into blocks of time (the famous "Pomodoros") interspersed with
            breaks. The goal is to maintain total focus for a short period and
            ensure breaks to avoid mental fatigue.
          </p>
          <img src='https://placehold.co/1920x1080' alt='' />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to work on.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break.</strong>
            </li>
            <li>
              <strong>4. Every 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>But Chronos Pomodoro has something special 🚀</h2>
          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can set the focus time, short break, and long break however you
            want! Just go to the <a href='/settings'>settings page</a> and
            adjust the minutes as you prefer.
          </p>

          <h3>🔁 Organized cycles in sequence</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles:</strong> Work (focus).
            </li>
            <li>
              <strong>Even cycles:</strong> Short break.
            </li>
            <li>
              <strong>Cycle 8:</strong> Special long break, to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Just below the timer, you'll see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know where you are in the process and what
            comes next. No need to write it down or keep track in your head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your tasks and completed cycles are saved in the{' '}
            <a href='/history'>history</a>, with statuses of completed or
            interrupted. This way, you can track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Customize your own cycles and times.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's{' '}
            <a href='/'>go back to the homepage</a> and start your Pomodoros!
            🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just do it!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
