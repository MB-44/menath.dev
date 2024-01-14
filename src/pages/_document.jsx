import Document from "next/document";
import { createGetInitialProps } from "@mantine/next";

const createGetInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = this.getInitialProps;
}