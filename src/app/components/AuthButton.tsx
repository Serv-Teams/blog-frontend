import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { isAuthenticated } from '@/lib/getAuth';

export default async function AuthButton() {
    const isAuth = await isAuthenticated();

    return isAuth ? <LogoutButton /> : <LoginButton />;
}
