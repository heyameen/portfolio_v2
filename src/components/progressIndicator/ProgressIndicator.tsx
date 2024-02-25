import React from "react";

const ProgressIndicator = (): React.JSX.Element => {
  return (
    <ol>
      <li>
        <span>1</span>
        <h3 className="font-medium leading-tight">Personal Info</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li>
        <span>2</span>
        <h3 className="font-medium leading-tight">Account Info</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li>
        <span>3</span>
        <h3 className="font-medium leading-tight">Review</h3>
        <p className="text-sm">Step details here</p>
      </li>
    </ol>
  );
};

export default ProgressIndicator;
