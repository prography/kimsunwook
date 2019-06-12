import React, { Component } from 'react';
import Kakao from 'kakaojs';
import home from '../assets/home.png'

class KakaoLogin extends Component {
  componentDidMount() {
    console.log("hello-------");
    Kakao.init('12d54589fa96afd4845a4b8bcb8270b5');
    console.log(Kakao);

    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      fail: function (err) {
        alert(JSON.stringify(err));
      },
      success: function (authObj) {
        // ...
        alert(JSON.stringify(authObj));
      },
    });

  //   Kakao.Auth.createLoginButton({
  //     container: '#kakao-login-btn',
  //     success: function(authObj) {
  //       // 로그인 성공시, API를 호출합니다.
  //       Kakao.API.request({
  //         url: '/v1/user/me',
  //         success: function(res) {
  //           alert(JSON.stringify(res));
  //         },
  //         fail: function(error) {
  //           alert(JSON.stringify(error));
  //         }
  //       });
  //     },
  //     fail: function(err) {
  //       alert(JSON.stringify(err));
  //     }
  //   });
  // }
  }
  render() {
    const buttonStyle = { paddingLeft: 140 }
    return (
      <div className="KakaoLogin">
        <div>
          <img src={home} width="500" />
        </div>
        <div style={buttonStyle}>
          <a id="kakao-login-btn" ></a>
        </div>

      </div>
    );
  }
}

export default KakaoLogin;