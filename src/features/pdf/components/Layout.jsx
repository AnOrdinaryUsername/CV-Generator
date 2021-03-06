import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import List, { Item } from './List';

const section = StyleSheet.create({
    heading: {
        borderBottom: '1 solid #000000',
        fontFamily: 'Garamond',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 16,
        textTransform: 'uppercase',
        paddingBottom: 2,
    },
    subSection: {
        marginTop: 8,
    },
});

const SectionHeading = ({ title }) => {
    return <Text style={section.heading}>{title}</Text>;
};

const SubSection = ({ children, marginTop }) => {
    const marginTopStyle = {
        marginTop: marginTop,
    };

    return <View style={marginTopStyle}>{children}</View>;
};

const sectionRow = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bold: {
        fontFamily: 'Garamond',
        fontWeight: 'bold',
    },
    italic: {
        fontFamily: 'Garamond',
        fontStyle: 'italic',
    },
});

const SubSectionRow = ({ type, fontSize, columnOne, columnTwo }) => {
    let styleType = null;

    switch (type) {
        case 'bold':
            styleType = sectionRow.bold;
            break;
        case 'italic':
            styleType = sectionRow.italic;
            break;
        default:
            throw new Error(
                `Unknown type '${type}' was passed to <SubSectionRow>.` +
                    `Only valid types are 'bold' and 'italic'.`
            );
    }

    let styleFontSize = null;
    if (typeof fontSize === 'string')
        switch (fontSize) {
            case 'sm':
                styleFontSize = {
                    fontSize: 12,
                };
                break;

            case 'med':
                styleFontSize = {
                    fontSize: 16,
                };
                break;

            case 'lg':
                styleFontSize = {
                    fontSize: 24,
                };
                break;

            default:
                throw new Error(
                    `Unknown fontSize '${type}' was passed to <SubSectionRow>.` +
                        `Only valid fontSizes are 'sm', 'med', 'lg', or a number.`
                );
        }
    else {
        styleFontSize = {
            fontSize: fontSize,
        };
    }

    return (
        <View style={[sectionRow.row, styleType, styleFontSize]}>
            <Text>{columnOne}</Text>
            <Text>{columnTwo}</Text>
        </View>
    );
};

const item = StyleSheet.create({
    listItem: {
        fontFamily: 'Garamond',
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    boldAndItalic: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    underline: {
        textDecoration: 'underline',
    },
});

const SubSectionListItem = ({ node }) => {
    const nodeText = new DOMParser().parseFromString(node, 'text/html').documentElement.textContent;

    let fontStyle = null;
    let decorationStyle = null;

    if (node.includes('<strong>') && node.includes('<em>')) {
        fontStyle = item.boldAndItalic;
    } else if (node.includes('<strong>')) {
        fontStyle = item.bold;
    } else if (node.includes('<em>')) {
        fontStyle = item.italic;
    }

    if (node.includes('<u>')) {
        decorationStyle = item.underline;
    }

    return <Text style={[item.listItem, fontStyle, decorationStyle]}>{nodeText}</Text>;
};

const SubSectionList = ({ data }) => {
    const parser = new DOMParser().parseFromString(data, 'text/html');
    // Stores all <li>s and their contents in 1D array.
    const bulletPoints = [...parser.querySelectorAll('li')];

    /* Goes through each <li> and stores all the individual nodes in an array (which is inside
     *  another array so it's 2D).
     *
     * e.g. const bulletPoints = [ "<li>Wowee<li>", "<li><em>italic</em> text</li>"];
     *
     *       map result:
     *       const list = [ ["Wowee"], ["<em>italic</em>", " text"] ];
     */
    const list = bulletPoints.map((listItem) => {
        const listNode = [];
        const childNodeCount = listItem.childNodes.length;

        for (let i = 0; i < childNodeCount; ++i) {
            const node = listItem.childNodes[i];

            // If node is of type 'Element' return HTML string
            if (node.outerHTML) {
                listNode.push(node.outerHTML);
                // Otherwise grab text from 'Text' node
            } else {
                listNode.push(node.textContent);
            }
        }

        return listNode;
    });

    return (
        <View>
            <List>
                {list.map((item) => {
                    return (
                        <Item>
                            {item.map((node) => {
                                return <SubSectionListItem node={node} />;
                            })}
                        </Item>
                    );
                })}
            </List>
        </View>
    );
};

export { SectionHeading, SubSection, SubSectionRow, SubSectionList };
