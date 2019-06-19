import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';

const req = requireContext('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
