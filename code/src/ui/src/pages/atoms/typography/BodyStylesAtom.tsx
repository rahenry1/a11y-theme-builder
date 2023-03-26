import React from 'react';
import { DesignSystem } from 'a11y-theme-builder-sdk';
import TextEditBox from '../../../components/TextEditBox';
import { HeadingSection } from '../../content/HeadingSection';
import { GeneratedCodeSection } from '../../content/GeneratedCodeSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';

const name = "BodyStylesAtom";

const body1CssPrefix = "Body1"
const body1BoldCssPrefix = "Body1-bold"
const body2CssPrefix = "Body2"
const body2BoldCssPrefix = "Body2-bold"
const body3CssPrefix = "Body3"
const body3BoldCssPrefix = "Body3-bold"

interface Props {
    designSystem: DesignSystem;
}

export const BodyStylesAtom: React.FC<Props> = ({ designSystem }) => {
    // console.log(`${name} - >>> enter()`)

    const bodyStylesAtom = designSystem.atoms.bodyStyles;

    const body1TypographyStyling        = bodyStylesAtom.body1
    const body1BoldTypographyStyling    = bodyStylesAtom.body1Bold
    const body2TypographyStyling        = bodyStylesAtom.body2
    const body2BoldTypographyStyling    = bodyStylesAtom.body2Bold
    const body3TypographyStyling        = bodyStylesAtom.body3
    const body3BoldTypographyStyling    = bodyStylesAtom.body3Bold

    const keyBody1          = body1TypographyStyling.key
    const keyBody1Bold      = body1BoldTypographyStyling.key
    const keyBody2          = body2TypographyStyling.key
    const keyBody2Bold      = body2BoldTypographyStyling.key
    const keyBody3          = body3TypographyStyling.key
    const keyBody3Bold      = body3BoldTypographyStyling.key
    
    if (!keyBody1 || !keyBody1Bold 
        || !keyBody2 || !keyBody2Bold 
        || !keyBody3 || !keyBody3Bold) return null;
    return (
        <div className="container">
            <HeadingSection item={bodyStylesAtom} title="Typography" />
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
            <TextEditBox
                textKey={keyBody1}
                cssPrefix={body1CssPrefix}
                designSystem={designSystem}
                isBody
            />  
            <TextEditBox
                textKey={keyBody1Bold}
                cssPrefix={body1BoldCssPrefix}
                designSystem={designSystem}
                isBody
            />
            <TextEditBox
                textKey={keyBody2}
                cssPrefix={body2CssPrefix}
                designSystem={designSystem}
                isBody
            />  
            <TextEditBox
                textKey={keyBody2Bold}
                cssPrefix={body2BoldCssPrefix}
                designSystem={designSystem}
                isBody
            /> 
            <TextEditBox
                textKey={keyBody3}
                cssPrefix={body3CssPrefix}
                designSystem={designSystem}
                isBody
            />  
            <TextEditBox
                textKey={keyBody3Bold}
                cssPrefix={body3BoldCssPrefix}
                designSystem={designSystem}
                isBody
            /> 
            </SettingsSection>
            <GeneratedCodeSection item={bodyStylesAtom}/>
        </div>
    )
}