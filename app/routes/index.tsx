import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello &quot;/&quot;!</div>;
}
