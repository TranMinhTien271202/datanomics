import { UploadRequestOption } from 'ant-design-vue/lib/vc-upload/interface';

export const downloadFile = (name: string, data: string) => {
  const evt = new MouseEvent("click", { view: window, bubbles: false, cancelable: true });
  const a = document.createElement("a");
  a.setAttribute("download", name);
  a.setAttribute("href", data);
  a.setAttribute("target", "_blank");
  a.dispatchEvent(evt);
};

export const getBase64 = (file: Blob, callback: (base64Url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(file);
};

export const dummyRequest = ({ onSuccess }: UploadRequestOption) => {
  setTimeout(() => { onSuccess!("ok"); }, 0);
};
