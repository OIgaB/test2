import { Trash2 } from 'lucide-react';

import {
  useDeleteFileMutation,
  useGetFilesQuery,
  useUploadFileMutation,
} from '../../redux/filesApi';

import * as S from '../FeedbackCarousel/Feedback.styled';
import {
  DeleteButton,
  ImageItem,
  ImagesList,
  StyledImage,
} from './FilesUpload.styled';

export const FilesUpload = () => {
  const { data: attachments = [], isLoading: isFetching } = useGetFilesQuery();

  console.info(!isFetching && attachments);

  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  const [deleteFile, { isLoading: isDeleting }] = useDeleteFileMutation();

  const handleFileChange = async e => {
    const inputFile = e.currentTarget.files[0];

    if (!inputFile) return;

    const maxSize = 5 * 1024 * 1024; // 5 МБ
    if (inputFile.size > maxSize) {
      alert('File size exceeds 5 MB. Select another file.');
      return;
    }

    const allowedFormats = [
      // 'application/pdf',
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];

    if (!allowedFormats.includes(inputFile.type)) {
      alert(
        'Unsupported file format. Choose a file with the extension .pdf, .jpg, .png, .gif or .webp.'
      );
      return;
    }

    const formData = new FormData();
    formData.append('file', inputFile);

    try {
      await uploadFile(formData).unwrap();
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleFileDelete = async idToDelete => {
    try {
      await deleteFile(idToDelete).unwrap();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <S.Section>
      <S.Container>
        <label>
          <input
            name="attachment"
            type="file"
            onChange={handleFileChange}
            accept="image/*,.png,.jpg,.gif,.web" //application/pdf
            disabled={isUploading}
          />
        </label>
        {isUploading && <p>Uploading to Supabase...</p>}
        <div>
          <p style={{ margin: '10px' }}>
            {isFetching
              ? 'Loading your images...'
              : attachments.length > 0
              ? 'Your images:'
              : 'No images have been uploaded yet'}
          </p>
          <ImagesList>
            {!isFetching &&
              attachments.length > 0 &&
              attachments.map(({ _id, fileURL, fileName }) => {
                const altText = fileName.split('_')[1];
                return (
                  <ImageItem key={_id}>
                    <StyledImage src={fileURL} alt={altText} />
                    <DeleteButton
                      onClick={() => handleFileDelete(_id)}
                      disabled={isDeleting}
                    >
                      <Trash2 size={18} strokeWidth={2.5} />
                    </DeleteButton>
                  </ImageItem>
                );
              })}
          </ImagesList>
        </div>
      </S.Container>
    </S.Section>
  );
};
