interface IAsyncComponent {
  status: string;
  component: JSX.Element;
  skeleton: JSX.Element;
}

export default function AsyncComponent({
  status,
  component,
  skeleton,
}: IAsyncComponent) {
  if (status === 'loading') {
    return skeleton;
  } else if (status === 'error') {
    throw new Error('Network Error');
  }

  return component;
}
