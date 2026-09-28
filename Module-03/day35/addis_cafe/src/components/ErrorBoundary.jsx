import { Component } from "react";
import "./ErrorBoundary.css";

/**
 Error boundary catches render errors in its children and shows a friendly fallback instead of a blank screen.
 Used around:
 * - the main page content (Layout)
 * - the lazy-loaded Checkout route
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Unknown error" };
  }

  componentDidCatch(error, info) {
    // In a real app you would send this to a logging service
    console.error("ErrorBoundary caught:", error, info?.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, message: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <h2>Oops – something broke</h2>
          <p>{this.state.message || "An unexpected error occurred."}</p>
          <p className="error-boundary-hint">
            You can try again, or go back to the menu.
          </p>
          <div className="error-boundary-actions">
            <button type="button" onClick={this.handleReset}>
              Try again
            </button>
            <a href="/menu" className="error-boundary-link">
              Go to menu
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
