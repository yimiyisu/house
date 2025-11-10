import Layout from './layout/index.vue';
import dict from './pages/dict';
import Routes from './pages/routes';
__webpack_public_path__ = zen.path('house');

zen.setup({ com: Layout, routes: Routes, dict });
