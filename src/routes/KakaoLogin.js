import React, { Component } from 'react';
import Kakao from 'kakaojs';
import home from '../assets/home.png'
import Logo from '../assets/Logo.png'
import Main from '../assets/Main.png'
import Typography from '@material-ui/core/Typography';
import axios from 'axios'


class KakaoLogin extends Component {
  componentDidMount() {
    const { handleSuccessLogin } = this.props;

    Kakao.init('12d54589fa96afd4845a4b8bcb8270b5');
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      fail: function (err) {
        console.error(err);
        // alert(JSON.stringify(err));
      },
      success: function (authObj) {
        axios.post('http://localhost:8000/rest-auth/kakao/', {
          access_token: authObj.access_token,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        
        handleSuccessLogin(authObj);
        console.log(authObj)
      },
    });

      // Kakao.Auth.createLoginButton({
      //   container: '#kakao-login-btn',
      //   success: function(authObj) {
      //     // 로그인 성공시, API를 호출합니다.
      //     Kakao.API.request({
      //       url: '/v1/user/me',
      //       success: function(res) {
      //         alert(JSON.stringify(res));
      //       },
      //       fail: function(error) {
      //         alert(JSON.stringify(error));
      //       }
      //     });
      //   },
      //   fail: function(err) {
      //     alert(JSON.stringify(err));
      //   }
      // });
    
  }
  render() {

    const kakaoStyle = {
      height: 640,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      // justifyContent: 'center',
      alignItems: 'center',

    }
    return (
      <div className="KakaoLogin" style={kakaoStyle}>
        <Typography variant="h5" component="h2">
          COFFEE REMOCON
        </Typography>
        <div>
          <img src={Main} width="180" />
        </div>
        <div >
          <a id="kakao-login-btn" ></a>
        </div>

      </div>
    );
  }
}



export default KakaoLogin;