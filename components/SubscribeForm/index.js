import React from 'react'
import * as S from './styled'

function SubscribeForm(props) {
    return (
        <S.Container
            id="mc-embedded-subscribe-form"
            action="https://arcor.us3.list-manage.com/subscribe/post?u=23a611280baff5c6bd68c83e3&amp;id=8dd07d6ca8"
            method="post"
            name="mc-embedded-subscribe-form"
            novalidate=""
            target="_blank"
        >
            <div id="mc_embed_signup_scroll">
                <S.Label for="mce-EMAIL">Email:</S.Label>
                <S.EmailInput id="mce-EMAIL" class="email" name="EMAIL" required="" type="email" placeholder="email address" />
                <S.HiddenInput>
                    <input tabindex="-1" name="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" type="text" />
                </S.HiddenInput>
                <div class="clear">
                    <S.Button id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe" />
                </div>
            </div>
        </S.Container>
    )
}

export default SubscribeForm
