import {createBrowserRouter} from 'react-router-dom';
import { routes } from './paths';

const router = createBrowserRouter([...routes],{});

export default router;