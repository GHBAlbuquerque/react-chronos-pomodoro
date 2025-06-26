import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi
          sed totam officiis aliquam ex magni repudiandae, rerum voluptatem
          deleniti sequi aliquid! Possimus ex error impedit. Debitis modi quos
          velit.
        </p>
      </Container>
    </MainTemplate>
  );
}
