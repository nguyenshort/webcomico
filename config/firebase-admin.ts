import {initializeApp, ServiceAccount} from "firebase-admin/app"
import {credential} from "firebase-admin"

const serviceAccount: ServiceAccount = {
    type: "service_account",
    project_id: "fan-e73a4",
    private_key_id: "4031d49a614118f70046c011ef7c57ea785f2f8d",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8vHBnYW35vjSv\nhoy2Va7lJ9aVL6wZa6Gc3wa6pBLoenmOv+EllgxApumCQme2YShucwt70xu63rI6\nG+Dhhurn6H3pFfrBPL0qKwOObR5RWSPjQFMnXIJLJhe7sARPXCfCkzoRnvwqnD97\nwn8wDoL9/3yvgZStS00oIC40/Bu6OyRkDPN7k+e0RP9gFnzICOolcjdKTsnc1dPe\nFxVeUxHywQYkSIos5TpNH+IkQsvoROo9auEBVkGSVAJm8MHqvFPy1LX2w3Sz3sHy\n0cbwSR1c9xLK3hJqybPWLrEmLDzXuvYYD/YJap3hLgvUTMiHuDBa95OPA5EklNDL\nljanEBALAgMBAAECggEAWnaF9/9am7SgAyveQT0jheII99vwRQTyY0MBMi+XgofF\nwPbWn1Hi0JBQZ2eV13SNURdifzjqVzELw09+hArLiFnHFBQ9aybGUrJoU3mY6Qvt\naCz6TmkIaKW7BXKyNimpQxmXYT/PhUr8IMFSfkHOZplxdZwKG9/2fQ+jpjDax3Fi\nzJj4tNVHwjru2AoRFXbJOGsiD/lQxga4EON0iKRIVoggd60dB99tUuSr6PagMogg\naSPwnp4QjJAkG7+9QJbSWmbF+nMarWihz96JIP/i4QVxpDs6V41k/AnQVuIi2pCJ\nxt1gPK2/rZp9Lnp3VSubpqoh/31ClUa9XHSR0V4jkQKBgQDzQQitamVOIwu4dMQ4\n3LNpseSSKKNRntdndXypS7boQmhnqRAllYzPcQjhSt05seCSzlK+tkaRvDOBteEV\neluocmNF8vVpF1FQsSi1HsY5rZ/zgcdCr4DBjw8sMSGKevcp0thWMMtW+Spq61NY\njvx5lHVxXrnKB2jxtpcD1L3EmwKBgQDGoBx2n8jC7jvbFF8pPLaN2g1i7mfVftk9\ndS+hUUUWn9PBe0Kn27iW6foS4hq2I4f1vgU/yUXhZ8zGsqKl3yzZ3PTjSyRUFPoZ\nehXoZthHLiqK3gMlVC+skxyhniirSnpb4TZHZNDwF/o3rabtlrn0ga/A+ZDBnu1R\nX/MS4CTBUQKBgQDyUKJYPVhVEcwnHwooqpF+hFrwzdKDB/wDb6GS831suFpQiLUw\n+1ydeDgkVPMy+eJ/20/J8sExg4y7dXaWcqDDl88UawXUfgnem9u1MMa9xhtD8s+P\nukxEhEHU/8wtqnh0DTi8AzdLmEGM6IbJ/QW8BwtGt9nTSrZbskuU4WN4aQKBgEK3\nMvhRUUDQfoBmxlP2labt8AMj6vKWKefvvbDkuF0SEDFz8n6pWcYvDxVapvg41Qkg\n62hydatxjyHKjMFERi9jfUn/SlOHvD3keQlXyhuWkSmVyt61+VFxFHPgyO5IFPNZ\noT63yUpr81rSVDiHoSxUhzE9Ynb2p+XmYaIccZwRAoGBAKPtymkVobWw/gQgwG0T\ncvrurYa+2OZ6wXDKokFVlF2KnbVlO8MoJehk3koDsmJZvBjIjgghbryfeMd+3kzi\ngZmMCriT/M31uI0yGPlenNMlcstgPN4qrwCXb6lslwnwwxX6GNE/kaoDKpc2iXSU\nrSo1UD+nYF2fFJIt6DF0aQ78\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-hyvco@fan-e73a4.iam.gserviceaccount.com",
    client_id: "115481773594239786767",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hyvco%40fan-e73a4.iam.gserviceaccount.com"
} as ServiceAccount

const firebaseApp = initializeApp({
    credential: credential.cert(serviceAccount),
})

export default firebaseApp
