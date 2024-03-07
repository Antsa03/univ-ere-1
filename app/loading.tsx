import styles from "./loading.module.css"; // Import the CSS module

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className={styles.spinner}>
        <h2 className="h1 text-custom-green absolute translate-x-24">
          Chargement...
        </h2>
      </div>
      ;
    </div>
  );
};

export default Loading;
