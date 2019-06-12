import React , { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            id : '',
            name: '',
            provider: '',
        }
    }

    responseKaKao = (res) => {
        this.setState({
            id:res.profile.id,
            name:res.profile.properties.nickname,
            provider: 'kakao'
        });
        
    }

    responseFail = (err) => {
        console.log(err);
    }

    render(){
        return(
            <Container>
                <KakaoButton
                    jsKey='12d54589fa96afd4845a4b8bcb8270b5'
                    buttonText='Kakao'
                    onSucess={this.responseKaKao}
                    onFailure={this.responseFail}
                    getProfile="true"
                 />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow:column wrap;
`

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default Login;