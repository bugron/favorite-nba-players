//@ts-nocheck
import classNames from "classnames";
import React from "react";
import styles from "./ErrorBoundary.module.css";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className={classNames(styles.errorBoundary)}>
        <h1 className={classNames(styles.errorHeader)}>
          Something went wrong 😭
        </h1>
        <p>Please, reload the page</p>
      </div>
    );
  }
}
