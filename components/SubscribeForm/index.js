import React from 'react'
import * as S from './styled'

function SubscribeForm({ text }) {
    return (
        <S.Container
            id="mc-embedded-subscribe-form"
            action="https://arcor.us3.list-manage.com/subscribe/post?u=23a611280baff5c6bd68c83e3&amp;id=8dd07d6ca8"
            method="post"
            name="mc-embedded-subscribe-form"
            novalidate=""
            target="_blank"
        >
            <S.Wrapper id="mc_embed_signup_scroll">
                { text && <S.Text>
                    {text}
                </S.Text>}
                <S.Input
                    id="mce-EMAIL"
                    label="E-Mail"
                    name="EMAIL"
                    required="true"
                    type="email"
                    placeholder="email address"
                />
                <S.HiddenInput>
                    <input tabindex="-1" name="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" type="text" />
                </S.HiddenInput>
                <div>
                    <S.SubmitButton
                        id="mc-embedded-subscribe"
                        variant="contained"
                        type="submit"
                    >
                        Subscribe
                    </S.SubmitButton>
                </div>
            </S.Wrapper>
        </S.Container>
    )
}

export default SubscribeForm
