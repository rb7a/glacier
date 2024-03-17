import React from "react"
import styled from '@emotion/styled';

const ScrollContainer = styled.div`
width: 60px;
position: absolute;
z-index: 10;
left: calc(50% - 18px);
top: 80%;
transform: scale(0.6) ;
.animate-text3 {
    opacity: 0;
}
.scroll-msg-inner {
    width: 40px;
    height: 80px;
    position: relative;
    border-radius: 34px;
    border: 3px solid white;
  }
.scroll-msg-wheel {
    position: relative;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background-color: white;
    animation-duration: 1.5s;
    animation-name: mouse-scroll;
    animation-iteration-count: infinite;
    @keyframes mouse-scroll {
        0%   { top: -25%; opacity: 1; }
        80% { opacity: 1; }
        100% { top: -15%; opacity: 0; }
        position: absolute;
        }
      }
`

export default function ScrollAnimation(){
    return (
        <ScrollContainer>
            <div className="scroll-msg-inner animate-text3">
                <div className="scroll-msg-wheel animate-text3">
                </div>
            </div>
        </ScrollContainer>
    )
}