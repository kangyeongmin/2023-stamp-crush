import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api, ownerHeader } from '../../../api';
import { MutateReq } from '../../../types/api';
import { StampcrushLogo, NaverLoginButton } from '../../../assets';
import { Container, LoginButton, LogoImg } from './style';

// interface NaverLoginReqBody {
//   clientId: number;
// }

// interface NaverLoginRes {

// }

export const postNaverLogin = async () => {
  return await api.post('/admin/login/naver');
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const { mutate: naverLogin } = useMutation({
    mutationFn: postNaverLogin,
    onSuccess: (data: any) => {
      // console.log(data.headers);
      // navigate(
      //   ,
      // );
    },
  });

  const goNaverLoginPage = () => {
    naverLogin();
  };

  return (
    <Container>
      <LogoImg src={StampcrushLogo} alt="스탬프크러쉬로고" />
      <LoginButton onClick={goNaverLoginPage}>
        <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7RLq6nq_iPu2JjNluOWm&redirect_uri=https://stampcrush.site/api/owners/oauth/naverstate=RycuGAGV4CIpaTpYOtj8Jw">
          <img src={NaverLoginButton} alt="네이버로그인" />
        </a>
      </LoginButton>
      {/* <button>카카오로그인</button> */}
    </Container>
  );
};

export default AdminLogin;
