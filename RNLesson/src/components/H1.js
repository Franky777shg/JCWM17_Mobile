import React from 'react'
import {
    View,
    Text
} from 'react-native'

export const H1 = ({ children, bold = false, color = 'black', size = 32, align = "left" }) => {
    return (
        <Text
            style={{
                fontSize: size,
                fontWeight: bold ? 'bold' : 'normal',
                color,
                textAlign: align
            }}
        >
            {children}
        </Text>
    )

}