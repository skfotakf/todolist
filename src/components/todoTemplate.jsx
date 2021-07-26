import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    /* 여기에 템플릿 css */
    width: 512px;
    height: 768px;

    /* 추후에 하단 추가버튼을 넣기 위한 설정 */
    position: relative;
    background: #FFF;
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);
    margin: 0 auto;

    /* 페이지 중앙에 위치 */
    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;