import dynamic from 'next/dynamic'

const FileViewer = dynamic(()=> import('react-file-viewer'), {
    ssr: false
})

function AboutUs(){
    console.log('In Contact Us')
    return (
        <div>
            In About Us
            <FileViewer fileType="pdf" filePath="/pdffiles/Kodavasal-Family.pdf" />
        </div>
    )
}

export default AboutUs