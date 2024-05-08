<script>
 class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    const formData = new FormData();
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          formData.append("upload", file, file.name);

          return fetch(process.env.VUE_APP_ROOT_API+"/cms/news/news/uploader", {
            method: "POST",
            // headers: {
            //   Authorization: `token ${yourToken}`,
            // },
            body: formData,
          })
            .then((res) => res.json())
            .then((d) => {
              console.log(d);
              if (d?.data?.url) {
                this.loader.uploaded = true;
                resolve({
                  default: d?.data?.url,
                });
              } else {
                reject(`Couldn't upload file: ${file.name}.`);
              }
            });
        })
    );
  }
}
export default function ThisCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}
</script>
