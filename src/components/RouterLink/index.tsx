import { Link } from 'react-router';

type RouterLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.ComponentProps<'a'>;

export function RouterLink({ href, children, ...props }: RouterLinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
