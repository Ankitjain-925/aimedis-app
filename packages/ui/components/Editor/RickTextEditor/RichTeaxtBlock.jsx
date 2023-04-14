import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { Editor, Transforms, createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { Box } from "@chakra-ui/react";
import { Element, Leaf, toggleMark, Toolbar } from "./components";

// @refresh reset
// const HOTKEYS: { [hotkey: string]: string } = {
//     "mod+b": "bold",
//     "mod+i": "italic",
//     "mod+u": "underline",
//     "mod+`": "code"
// };

// export interface RichTextBlockProps{ register: any }

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "" }]
    }
];

const exampleValue = [
    {
        type: "paragraph",
        children: [
            { text: "This is editable " }
        ]
    }
];

export const RichTextBlock = (props) => {
    const { register } = props;
    const [value, setValue] = useState(exampleValue);
    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    //focus selection
    const [focused, setFocused] = React.useState(false);
    const savedSelection = React.useRef(editor.selection);

    const onFocus = React.useCallback(() => {
        setFocused(true);
        if (!editor.selection && value?.length) {
            Transforms.select(
                editor,
                savedSelection.current ?? Editor.end(editor, [])
            );
        }
    }, [editor]);

    const updateText = (text) => {
        setValue(text);
        props.onChange(text);
    }
    const onBlur = React.useCallback(() => {
        setFocused(false);
        savedSelection.current = editor.selection;
    }, [editor]);

    const divRef = React.useRef(null);

    const focusEditor = React.useCallback(
        (e) => {
            if (e.target === divRef.current) {
                ReactEditor.focus(editor);
                e.preventDefault();
            }
        },
        [editor]
    );

    const onKeyDown = (event) => {
        for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
            }
        }
    };

    return (
        <Box ref={divRef} onMouseDown={focusEditor} borderWidth={"1px"}>
            <Slate
                editor={editor}
                value={value}
                onChange={(newValue) => { updateText(newValue) }}

            >
                <Toolbar />
                <Box padding={"15px 5px"}>
                    <Editable

                        onFocus={onFocus}
                        onBlur={onBlur}
                        // onKeyDown={onKeyDown}
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Enter some rich text…"
                        spellCheck
                        style={{ minHeight: "150px", resize: "vertical", overflow: "auto" }}
                    />
                </Box>
            </Slate>
        </Box>
    );
};
