import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  nav ul {
    list-style: none;
    padding: 0 0 0 2rem;
    margin: none;
    display: flex;
  }
  nav li {
    font-size: 2rem;
    margin-left: 2rem;
  }
  h1 svg {
    width: 90rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>
        <Link href="/">
          <a>
            <svg
              viewBox="0 0 571 101"
              fill="none"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Pop Around Logo</title>
              <path
                d="M514.035 73.4C514.035 69.2 513.989 64.3467 513.895 58.84C513.895 53.24 513.895 47.6867 513.895 42.18C513.895 36.6733 513.895 31.5867 513.895 26.92C513.895 22.2533 513.942 18.7533 514.035 16.42C514.222 10.82 515.762 6.71335 518.655 4.10001C521.549 1.48667 526.029 0.273343 532.095 0.460012C536.389 0.553345 540.682 1.53334 544.975 3.40001C549.269 5.26668 553.142 8.02001 556.595 11.66C560.142 15.3 563.082 19.92 565.415 25.52C567.842 31.0267 569.335 37.56 569.895 45.12C570.362 51.3733 570.315 56.9733 569.755 61.92C569.289 66.7733 568.449 71.02 567.235 74.66C566.115 78.3 564.762 81.4267 563.175 84.04C561.589 86.56 560.002 88.66 558.415 90.34C555.522 93.5133 552.209 95.94 548.475 97.62C544.835 99.3 540.915 100.14 536.715 100.14C532.795 100.14 529.389 99.6267 526.495 98.6C523.695 97.5733 521.362 96.22 519.495 94.54C517.629 92.86 516.229 90.9934 515.295 88.94C514.455 86.7934 514.035 84.6933 514.035 82.64V73.4ZM531.255 22.3C531.162 23.5133 531.069 25.6133 530.975 28.6C530.882 31.5867 530.835 34.76 530.835 38.12C530.835 41.48 530.835 44.7467 530.835 47.92C530.929 51 531.022 53.24 531.115 54.64C531.209 57.5333 531.862 59.4467 533.075 60.38C534.382 61.22 535.689 61.64 536.995 61.64C540.822 61.64 543.855 60.4267 546.095 58C548.055 55.8533 549.315 53.1467 549.875 49.88C550.529 46.52 550.762 43.4867 550.575 40.78C550.389 38.54 549.829 36.1133 548.895 33.5C548.055 30.8867 546.889 28.5067 545.395 26.36C543.995 24.2133 542.362 22.44 540.495 21.04C538.629 19.5467 536.622 18.8 534.475 18.8H534.335C533.029 18.8 532.189 19.08 531.815 19.64C531.442 20.2 531.255 21.0867 531.255 22.3Z"
                fill="#FF4C01"
              />
              <path
                d="M454.973 12.64C454.973 9.09335 455.859 6.29335 457.633 4.24002C459.406 2.09335 461.833 0.926686 464.913 0.740016C466.779 0.553352 468.226 0.786685 469.253 1.44002C470.279 2.00002 471.119 2.56002 471.773 3.12002C472.333 3.58668 472.753 3.91335 473.033 4.10001C473.406 4.28668 473.873 4.38002 474.433 4.38002C474.806 4.38002 475.273 4.28668 475.833 4.10001C476.393 3.82002 476.999 3.54002 477.653 3.26002C478.959 2.70002 480.406 2.14002 481.993 1.58002C483.673 1.02002 485.539 0.740016 487.593 0.740016C492.073 0.740016 495.666 2.23335 498.373 5.22002C500.426 7.36668 501.966 10.0734 502.993 13.34C504.019 16.5134 504.719 19.92 505.093 23.56C505.559 27.2 505.746 30.8867 505.653 34.62C505.653 38.3534 505.606 41.76 505.513 44.84C505.419 45.96 505.326 46.9867 505.233 47.92C505.233 48.8534 505.233 49.6934 505.233 50.44C505.233 53.3334 505.326 56.88 505.513 61.08C505.699 65.28 505.933 69.34 506.213 73.26C506.493 77.0867 506.726 80.4 506.913 83.2C507.099 85.9067 507.193 87.3067 507.193 87.4V87.54C507.193 91.46 506.259 94.54 504.393 96.78C502.619 98.9267 500.193 100 497.113 100C493.939 100 491.419 98.9267 489.553 96.78C487.779 94.54 486.893 91.46 486.893 87.54V87.4C486.893 87.3067 487.079 86 487.453 83.48C487.826 80.8667 488.106 76.48 488.293 70.32V66.96C488.293 62.9467 487.966 59.8667 487.313 57.72C486.753 55.5734 486.053 54.0334 485.213 53.1C484.466 52.0734 483.673 51.5134 482.833 51.42C481.993 51.2334 481.339 51.14 480.873 51.14C479.659 51.14 478.586 51.56 477.653 52.4C476.719 53.24 475.926 54.36 475.273 55.76C474.619 57.16 474.106 58.7467 473.733 60.52C473.453 62.2 473.313 63.9734 473.313 65.84C473.313 67.8934 473.406 70.18 473.593 72.7C473.779 75.22 473.966 77.5534 474.153 79.7C474.433 81.8467 474.666 83.6667 474.853 85.16C475.039 86.56 475.133 87.3067 475.133 87.4V87.54C475.133 91.46 474.246 94.54 472.473 96.78C470.699 98.9267 468.226 100 465.053 100C461.879 100 459.406 98.9267 457.633 96.78C455.859 94.54 454.973 91.46 454.973 87.54V87.4C454.973 87.3067 455.019 86.6067 455.113 85.3C455.206 83.9934 455.299 82.2667 455.393 80.12C455.486 77.9734 455.579 75.5467 455.673 72.84C455.859 70.1334 455.999 67.4267 456.093 64.72C456.186 62.0134 456.279 59.4 456.373 56.88C456.466 54.2667 456.513 52.0267 456.513 50.16C456.513 47.36 456.419 43.86 456.233 39.66C456.139 35.46 455.953 31.4 455.673 27.48C455.486 23.4667 455.299 20.06 455.113 17.26C455.019 14.3667 454.973 12.8734 454.973 12.78V12.64Z"
                fill="#FF4C01"
              />
              <path
                d="M396.18 11.52C396.087 8.62669 396.974 6.06002 398.84 3.82002C400.8 1.76669 403.227 0.646686 406.12 0.460022C408.92 0.460022 411.254 1.53336 413.12 3.68002C415.08 5.82669 416.06 8.25336 416.06 10.96C416.06 13.48 415.967 15.6267 415.78 17.4C415.687 19.1734 415.5 20.8067 415.22 22.3C415.034 23.7 414.847 25.0534 414.66 26.36C414.474 27.6667 414.38 29.16 414.38 30.84C414.38 32.0534 414.38 33.4067 414.38 34.9C414.474 36.3 414.614 37.7 414.8 39.1C414.987 40.4067 415.267 41.6667 415.64 42.88C416.107 44 416.714 44.9334 417.46 45.68C418.58 46.8 420.26 47.36 422.5 47.36C424.087 47.36 425.347 47.0334 426.28 46.38C427.214 45.7267 427.96 44.9334 428.52 44C429.08 43.0667 429.454 42.1334 429.64 41.2C429.92 40.2667 430.061 39.4734 430.061 38.82C430.154 37.7 430.2 36.72 430.2 35.88C430.2 34.9467 430.154 33.64 430.061 31.96C429.967 30.1867 429.827 27.7134 429.64 24.54C429.454 21.2734 429.22 16.7 428.94 10.82C428.847 9.51336 429.034 8.20669 429.5 6.90002C430.06 5.59336 430.807 4.47336 431.74 3.54002C433.42 1.58002 435.66 0.60002 438.46 0.60002C441.167 0.413356 443.5 1.39336 445.46 3.54002C447.7 5.78002 448.727 8.44002 448.54 11.52C448.354 14.5067 448.167 17.3067 447.98 19.92C447.887 22.5334 447.747 25.0534 447.561 27.48C447.374 30.28 447.187 33.0334 447 35.74C446.907 38.3534 446.814 41.0134 446.72 43.72C446.627 45.8667 446.58 47.92 446.58 49.88C446.674 51.7467 446.767 53.7067 446.86 55.76C446.954 58.0934 447 60.4734 447 62.9C447.094 65.3267 447.047 68.0334 446.86 71.02C446.674 80.1667 444.434 87.3067 440.14 92.44C435.847 97.5734 429.92 100.14 422.36 100.14C417.974 100.14 414.194 99.3 411.02 97.62C407.94 95.8467 405.374 93.56 403.32 90.76C401.36 87.8667 399.914 84.6 398.98 80.96C398.047 77.2267 397.58 73.4 397.58 69.48C397.58 67.8934 397.58 66.3534 397.58 64.86C397.674 63.2734 397.72 61.6867 397.72 60.1C397.814 57.58 397.86 55.0134 397.86 52.4C397.954 49.6934 398 46.9867 398 44.28C398 41.2934 397.954 38.4 397.86 35.6C397.767 32.7067 397.627 29.9534 397.44 27.34C397.347 24.7267 397.207 22.3467 397.02 20.2C396.834 18.0534 396.647 16.28 396.46 14.88C396.367 14.04 396.274 13.34 396.18 12.78C396.18 12.22 396.18 11.8 396.18 11.52Z"
                fill="#FF4C01"
              />
              <path
                d="M331.727 58.56C331.54 45.68 332.474 35.04 334.527 26.64C336.58 18.24 339.8 11.8 344.187 7.32C348.854 2.65334 354.547 0.320007 361.267 0.320007C368.174 0.320007 373.914 2.70001 378.487 7.46001C387.354 16.6067 391.507 33.6867 390.947 58.7C390.854 63.2733 390.294 68.0333 389.267 72.98C388.24 77.8333 386.56 82.2667 384.227 86.28C381.894 90.2933 378.86 93.6067 375.127 96.22C371.394 98.8333 366.774 100.14 361.267 100.14C357.814 100.14 354.314 99.44 350.767 98.04C347.314 96.5467 344.187 94.1667 341.387 90.9C338.587 87.54 336.3 83.2467 334.527 78.02C332.754 72.7 331.82 66.2133 331.727 58.56ZM357.627 31.12C355.387 32.7067 354.36 35.9733 354.547 40.92C354.547 43.2533 355.154 45.0733 356.367 46.38C357.58 47.6867 359.214 48.34 361.267 48.34C363.32 48.34 364.907 47.6867 366.027 46.38C367.24 45.0733 367.894 43.2533 367.987 40.92C368.174 37.9333 367.894 35.74 367.147 34.34C366.4 32.8467 365.654 31.7733 364.907 31.12C364.067 30.3733 362.854 30 361.267 30C359.68 30 358.467 30.3733 357.627 31.12Z"
                fill="#FF4C01"
              />
              <path
                d="M283.757 100.42C280.677 100.42 278.25 99.3467 276.477 97.2C274.704 94.96 273.817 91.9267 273.817 88.1V87.96C273.817 87.8667 273.817 87.1667 273.817 85.86C273.91 84.5533 274.004 82.8733 274.097 80.82C274.284 78.6733 274.424 76.2933 274.517 73.68C274.61 71.0667 274.704 68.4067 274.797 65.7C274.984 62.9933 275.077 60.38 275.077 57.86C275.17 55.34 275.217 53.1933 275.217 51.42C275.217 48.1533 275.124 44.56 274.937 40.64C274.75 36.72 274.564 33.0333 274.377 29.58C274.19 27.1533 274.05 24.96 273.957 23C273.864 20.9467 273.817 19.3133 273.817 18.1C273.817 12.8733 275.264 8.85999 278.157 6.05999C280.584 3.72666 283.804 2.32665 287.817 1.85999C291.83 1.29999 296.684 1.15999 302.377 1.43999C305.55 1.62665 308.537 2.32666 311.337 3.53999C314.23 4.65999 316.797 6.19999 319.037 8.15999C321.277 10.12 323.097 12.4533 324.497 15.16C325.99 17.7733 326.877 20.7133 327.157 23.98C328.277 33.8733 327.11 42.04 323.657 48.48C321.23 53.24 317.824 56.74 313.437 58.98C314.837 61.6867 316.33 64.4867 317.917 67.38C319.597 70.2733 321.09 72.9333 322.397 75.36C323.797 77.6933 324.964 79.6533 325.897 81.24C326.83 82.8267 327.297 83.62 327.297 83.62V83.9C327.857 84.9267 328.37 86.42 328.837 88.38C329.397 90.2467 329.304 92.1133 328.557 93.98C327.81 95.8467 326.55 97.3867 324.777 98.6C323.004 99.72 321.137 100.28 319.177 100.28C317.217 100.28 315.304 99.6733 313.437 98.46C311.57 97.1533 310.124 95.1933 309.097 92.58L308.817 91.88C308.164 88.24 307.417 84.74 306.577 81.38C305.83 77.9267 304.99 74.8933 304.057 72.28C303.217 69.5733 302.377 67.3333 301.537 65.56C300.79 63.7867 300.09 62.7133 299.437 62.34C298.504 61.78 297.244 61.1267 295.657 60.38C294.07 59.6333 292.484 58.8867 290.897 58.14C289.31 57.3933 287.91 56.6467 286.697 55.9C285.577 55.1533 284.924 54.4533 284.737 53.8C284.27 51.9333 284.737 50.02 286.137 48.06C286.884 46.94 287.677 46.1933 288.517 45.82C289.357 45.4467 290.244 45.26 291.177 45.26C291.55 45.26 292.344 45.4 293.557 45.68C294.77 45.8667 296.03 46.1 297.337 46.38C298.737 46.66 299.997 46.94 301.117 47.22C302.237 47.4067 302.937 47.5467 303.217 47.64C303.59 47.7333 303.917 47.8267 304.197 47.92C304.57 48.0133 304.85 48.06 305.037 48.06C306.25 47.8733 307.184 47.1733 307.837 45.96C309.144 43.9067 309.284 41.5267 308.257 38.82C308.07 38.3533 307.697 37.7933 307.137 37.14C306.67 36.4867 306.017 35.88 305.177 35.32C304.43 34.76 303.497 34.34 302.377 34.06C301.257 33.78 299.997 33.7333 298.597 33.92C294.864 34.48 292.764 36.9533 292.297 41.34C292.017 43.3933 291.877 46.1933 291.877 49.74C291.97 53.1933 292.064 56.7867 292.157 60.52C292.344 64.16 292.53 67.66 292.717 71.02C292.904 74.38 293.09 76.9467 293.277 78.72H293.417C293.604 81.52 293.744 83.7133 293.837 85.3C293.837 86.3267 293.884 87.2133 293.977 87.96V88.1C293.977 91.9267 293.044 94.96 291.177 97.2C289.404 99.3467 286.93 100.42 283.757 100.42Z"
                fill="#FF4C01"
              />
              <path
                d="M216.995 97.34C214.755 95.1 213.728 92.44 213.915 89.36C214.101 86.3733 214.241 83.62 214.335 81.1C214.521 78.4867 214.708 75.92 214.895 73.4C215.361 67.7067 215.641 62.2933 215.735 57.16C215.828 53.0533 215.828 49.04 215.735 45.12C215.641 42.7867 215.548 40.4533 215.455 38.12C215.455 35.6933 215.501 32.9867 215.595 30C215.781 20.76 218.021 13.62 222.315 8.58C226.701 3.44667 232.628 0.880005 240.095 0.880005C247.001 0.880005 252.555 3.02667 256.755 7.32C258.621 9.28 260.115 11.4267 261.235 13.76C262.355 16 263.195 18.24 263.755 20.48C264.315 22.72 264.641 24.82 264.735 26.78C264.828 28.74 264.875 30.3267 264.875 31.54C264.875 39.8467 264.735 48.2 264.455 56.6C264.455 62.5733 264.641 68.2667 265.015 73.68C265.481 79 265.808 83.1067 265.995 86C266.181 86.84 266.275 87.54 266.275 88.1C266.275 88.66 266.275 89.08 266.275 89.36C266.555 92.2533 265.668 94.82 263.615 97.06C262.681 98.0867 261.561 98.9267 260.255 99.58C259.041 100.14 257.781 100.42 256.475 100.42H256.335C254.935 100.42 253.628 100.14 252.415 99.58C251.295 98.9267 250.268 98.1333 249.335 97.2C248.401 96.1733 247.655 95.0533 247.095 93.84C246.628 92.5333 246.395 91.2267 246.395 89.92C246.395 88.52 246.441 86.6533 246.535 84.32C246.721 81.8933 246.908 79.1867 247.095 76.2C247.281 72.84 247.468 69.3867 247.655 65.84C247.841 62.2933 247.981 59.0267 248.075 56.04C248.075 54.8267 248.075 53.52 248.075 52.12C248.075 50.6267 247.935 49.2267 247.655 47.92C247.468 46.52 247.188 45.26 246.815 44.14C246.441 42.9267 245.881 41.9467 245.135 41.2C243.921 40.08 242.195 39.52 239.955 39.52C238.461 39.52 237.248 39.8467 236.315 40.5C235.381 41.1533 234.635 41.9467 234.075 42.88C233.515 43.8133 233.095 44.7933 232.815 45.82C232.628 46.7533 232.488 47.5467 232.395 48.2C232.208 50.6267 232.068 52.68 231.975 54.36C231.881 56.04 231.788 58 231.695 60.24C232.535 59.68 233.935 59.3067 235.895 59.12C237.948 58.9333 240.048 58.84 242.195 58.84C244.435 58.84 246.488 58.9333 248.355 59.12C250.221 59.2133 251.481 59.3533 252.135 59.54C252.881 59.7267 253.768 60.1933 254.795 60.94C255.821 61.5933 256.708 62.7133 257.455 64.3C258.575 67.0067 258.575 69.5267 257.455 71.86C257.175 72.3267 256.241 72.7467 254.655 73.12C253.068 73.4 251.248 73.68 249.195 73.96C247.141 74.24 245.088 74.52 243.035 74.8C240.981 74.9867 239.395 75.22 238.275 75.5C235.661 76.06 234.121 77.1333 233.655 78.72C233.281 80.2133 233.188 82.78 233.375 86.42C233.468 86.98 233.515 87.5867 233.515 88.24C233.515 88.8 233.515 89.4533 233.515 90.2C233.608 91.2267 233.421 92.44 232.955 93.84C232.581 95.1467 231.835 96.36 230.715 97.48C228.848 99.3467 226.608 100.28 223.995 100.28C221.381 100.373 219.048 99.3933 216.995 97.34Z"
                fill="#FF4C01"
              />
              <path
                d="M120.822 87.54C120.822 87.4467 120.869 86 120.962 83.2C121.149 80.4 121.336 77.0867 121.522 73.26C121.802 69.34 121.989 65.3267 122.082 61.22C122.269 57.02 122.362 53.5667 122.362 50.86C122.362 47.5933 122.222 44 121.942 40.08C121.756 36.16 121.569 32.4733 121.382 29.02C121.196 26.22 121.009 23.6533 120.822 21.32C120.729 18.9867 120.776 16.8867 120.962 15.02C121.149 13.06 121.522 11.3333 122.082 9.83999C122.736 8.25332 123.762 6.80666 125.162 5.49999C127.589 3.16665 130.809 1.76665 134.822 1.29999C138.836 0.739988 143.689 0.59999 149.382 0.879992C156.289 1.25332 161.936 3.25999 166.322 6.89999C170.709 10.4467 173.276 15.16 174.022 21.04C174.489 24.8667 174.582 28.6933 174.302 32.52C174.116 36.2533 173.509 39.8933 172.482 43.44C171.456 46.8933 170.056 50.1133 168.282 53.1C166.602 55.9933 164.502 58.5133 161.982 60.66C159.089 63.0867 156.289 65.2333 153.582 67.1C150.969 68.8733 148.636 70.6 146.582 72.28C144.529 73.8667 142.942 75.5 141.822 77.18C140.702 78.86 140.236 80.82 140.422 83.06C140.422 84.3667 140.516 85.3467 140.702 86C140.889 86.6533 140.982 87.4933 140.982 88.52C140.982 92.44 140.049 95.3333 138.182 97.2C136.409 99.0667 133.936 100 130.762 100C127.682 100 125.256 98.9267 123.482 96.78C121.709 94.6333 120.822 91.6 120.822 87.68V87.54ZM139.302 44.84C139.302 45.4933 139.256 46.38 139.162 47.5C139.162 48.5267 139.162 49.6933 139.162 51C139.162 52.2133 139.116 53.52 139.022 54.92C139.022 56.2267 139.022 57.4867 139.022 58.7C140.796 57.3933 142.616 55.9933 144.482 54.5C146.442 52.9133 147.982 51.6067 149.102 50.58C151.156 48.34 151.996 46.1467 151.622 44C151.436 42.4133 150.829 41.2467 149.802 40.5C148.776 39.7533 147.516 39.38 146.022 39.38C144.342 39.38 142.849 39.8467 141.542 40.78C140.236 41.62 139.489 42.9733 139.302 44.84Z"
                fill="#FF4C01"
              />
              <path
                d="M57.1957 58.56C57.009 45.68 57.9424 35.04 59.9957 26.64C62.049 18.24 65.269 11.8 69.6557 7.32C74.3224 2.65334 80.0157 0.320007 86.7357 0.320007C93.6424 0.320007 99.3824 2.70001 103.956 7.46001C112.822 16.6067 116.976 33.6867 116.416 58.7C116.322 63.2733 115.762 68.0333 114.736 72.98C113.709 77.8333 112.029 82.2667 109.696 86.28C107.362 90.2933 104.329 93.6067 100.596 96.22C96.8624 98.8333 92.2424 100.14 86.7357 100.14C83.2824 100.14 79.7824 99.44 76.2357 98.04C72.7824 96.5467 69.6557 94.1667 66.8557 90.9C64.0557 87.54 61.769 83.2467 59.9957 78.02C58.2224 72.7 57.289 66.2133 57.1957 58.56ZM83.0957 31.12C80.8557 32.7067 79.829 35.9733 80.0157 40.92C80.0157 43.2533 80.6224 45.0733 81.8357 46.38C83.049 47.6867 84.6824 48.34 86.7357 48.34C88.789 48.34 90.3757 47.6867 91.4957 46.38C92.709 45.0733 93.3624 43.2533 93.4557 40.92C93.6424 37.9333 93.3624 35.74 92.6157 34.34C91.869 32.8467 91.1224 31.7733 90.3757 31.12C89.5357 30.3733 88.3224 30 86.7357 30C85.149 30 83.9357 30.3733 83.0957 31.12Z"
                fill="#FF4C01"
              />
              <path
                d="M0.919958 87.54C0.919958 87.4467 0.966624 86 1.05996 83.2C1.24662 80.4 1.43329 77.0867 1.61996 73.26C1.89996 69.34 2.08662 65.3267 2.17996 61.22C2.36662 57.02 2.45996 53.5667 2.45996 50.86C2.45996 47.5933 2.31996 44 2.03996 40.08C1.85329 36.16 1.66662 32.4733 1.47996 29.02C1.29329 26.22 1.10662 23.6533 0.919958 21.32C0.826624 18.9867 0.873291 16.8867 1.05996 15.02C1.24662 13.06 1.61996 11.3333 2.17996 9.83999C2.83329 8.25332 3.85996 6.80666 5.25996 5.49999C7.68662 3.16665 10.9066 1.76665 14.92 1.29999C18.9333 0.739988 23.7866 0.59999 29.48 0.879992C36.3866 1.25332 42.0333 3.25999 46.42 6.89999C50.8066 10.4467 53.3733 15.16 54.12 21.04C54.5866 24.8667 54.68 28.6933 54.4 32.52C54.2133 36.2533 53.6066 39.8933 52.58 43.44C51.5533 46.8933 50.1533 50.1133 48.38 53.1C46.7 55.9933 44.6 58.5133 42.08 60.66C39.1866 63.0867 36.3866 65.2333 33.68 67.1C31.0666 68.8733 28.7333 70.6 26.68 72.28C24.6266 73.8667 23.04 75.5 21.92 77.18C20.8 78.86 20.3333 80.82 20.52 83.06C20.52 84.3667 20.6133 85.3467 20.8 86C20.9866 86.6533 21.08 87.4933 21.08 88.52C21.08 92.44 20.1466 95.3333 18.28 97.2C16.5066 99.0667 14.0333 100 10.86 100C7.77996 100 5.35329 98.9267 3.57996 96.78C1.80662 94.6333 0.919958 91.6 0.919958 87.68V87.54ZM19.4 44.84C19.4 45.4933 19.3533 46.38 19.26 47.5C19.26 48.5267 19.26 49.6933 19.26 51C19.26 52.2133 19.2133 53.52 19.12 54.92C19.12 56.2267 19.12 57.4867 19.12 58.7C20.8933 57.3933 22.7133 55.9933 24.58 54.5C26.54 52.9133 28.08 51.6067 29.2 50.58C31.2533 48.34 32.0933 46.1467 31.72 44C31.5333 42.4133 30.9266 41.2467 29.9 40.5C28.8733 39.7533 27.6133 39.38 26.12 39.38C24.44 39.38 22.9466 39.8467 21.64 40.78C20.3333 41.62 19.5866 42.9733 19.4 44.84Z"
                fill="#FF4C01"
              />
            </svg>
          </a>
        </Link>
      </h1>
      <Nav />
    </HeaderStyles>
  );
}
