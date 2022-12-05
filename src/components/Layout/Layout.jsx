import {
  Container,
  Bar,
  NavigationList,
  NavigationLink,
} from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const navOptions = [
  { title: 'Home', href: '/' },
  { title: 'Movies', href: '/movies' },
];

export function Layout() {
  return (
    <Container>
      <Bar>
        <nav>
          <NavigationList>
            {navOptions.map(({ title, href }) => (
              <li key={href}>
                <NavigationLink to={href} end>
                  {title}
                </NavigationLink>
              </li>
            ))}
          </NavigationList>
        </nav>
      </Bar>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
