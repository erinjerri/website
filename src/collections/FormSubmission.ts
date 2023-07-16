import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
    slug: 'form-submissions',
    fields: [
        {
            type: 'text',
            name: 'from',
            label: 'From Email',
        },
        {   
            type: 'textarea',
            name: 'message',
            label: 'Message',
         },
    ],
};

export default FormSubmission;