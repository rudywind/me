$(document).ready(function () {
        const images = [
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEic1J12hgDMXHoHcyUR0Baa3YXw3QQ1mUt-51ILmcuvDkgd9AT0yUXy7CcmuFF2JbYB4unPpO8T6YAboscIExT3OYjp9bkpOeOTpWSpkW4YVBzSM831TFs3FmB_DsO2zTw3o23ub1OPlomOQOvAmvvWApKGPI9bF3js4Fh890HkEybgWOFdgOrpIjy1I_4/s1600/TOTOMACAU-4D.png', target: 'warapper-timer-m17-TM' }, //4DTOTOMACAU
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWHHpqyNDGlj08nxITT0l6XD_BuAlErax1oYN-vuUH_DI1PLr2b4CZAyIXa4yZbtY9LzqkwcLpHmauKvehWTAZ3wfQKViCsMA7kcp46U6YXTiVi421eYK5Ju-mK1rWE7DgOM0KhUooDdrwVMxZxSP-cU2tLHqNnpHD8rmT6PZhcCHeOLQ6yZsP-cckSy4/s1600/TOTOMACAU-5D.png', target: 'warapper-timer-m51-TM5D' }, //5DTOTOMACAU
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0yAi3C71kz8KmMG31oHdMpiJVaCNbTBmmjlI0GmrjZG1FMbrEQOj9QkO6Jt0U6CiAI8yON1IDihwQSHYbfskyraxuehxJDoiYUEX5LbgUzVIzfMblW3ybTZ2ZKnvUp7KIlk1zQ8Vb2BnNctxpipsqJvRHAKKeJ5uKNb-PuH5ODHp-QOO9fTe3BCmp-as/s1600/kingkongaaee0fd617c14984.png', target: 'warapper-timer-m83-KK4D' }, //KINGKONG4D
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixfn-E9IsEUmcXd_2j-on7BVDhVlIEYtFafo7AKiagyefmkip-_pLlzbL2tv0gAaX26QuC-zsMrZCvK0HdtzSDX_1hzRD2Hcbjqueu_rsF_niOxkHNOOrpCuS2CD_8Dr1f-Pq3iA48nkb6lNhLFEGDJGlt7vdUTBdXY7XmmcxUX5kR1hHTLqk-5ZeQT_A/s50/huahin.png', target: 'warapper-timer-p52431-HIRU' }, //HUAHIN
            { src: 'https://i.ibb.co.com/k4kJrsn/fukushimaprize.png', target: 'warapper-timer-p52432-HIUA' }, //FUKUSHIMA
            { src: 'https://i.ibb.co.com/NpbKkjt/katsuyamaprize.png', target: 'warapper-timer-p52433-UYRU' }, //KATSUYAMA
            { src: 'https://i.ibb.co.com/wRysVZn/jejuprize.png', target: 'warapper-timer-p52434-EJRU' }, //JEJU
            { src: 'https://i.ibb.co.com/0QZCtCB/cekoprize.png', target: 'warapper-timer-p71821-OARU' }, //CEKO
            { src: 'https://i.ibb.co.com/DtzpKnY/peruprize.png', target: 'warapper-timer-p71822-OBRU' }, //PERU
            { src: 'https://i.ibb.co.com/kSCnqWq/kostarikaprize.png', target: 'warapper-timer-p71823-OCRU' }, //COSTA RICA
            { src: 'https://i.ibb.co.com/7C5wF5c/panamaprize.png', target: 'warapper-timer-p71824-ODRU' }, //PANAMA
            { src: 'https://i.ibb.co.com/X7ZBHFf/sloveniaprize.png', target: 'warapper-timer-p71825-OERU' }, //SLOVENIA
            { src: 'https://i.ibb.co.com/ssDyMbk/swediaprize.png', target: 'warapper-timer-p71826-OFRU' }, //SWEDIA
            { src: 'https://i.ibb.co.com/SKK3stw/norwegiaprize.png', target: 'warapper-timer-p71827-OHRU' }, //NORWEGIA
            { src: 'https://i.ibb.co.com/DtzpKnY/peruprize.png', target: 'warapper-timer-p71828-OIRU' }, //FRANCE
            { src: 'https://i.ibb.co.com/wLNHnG8/finlandiaprize.png', target: 'warapper-timer-p71829-OJRU' }, //FINLANDIA
            { src: 'https://i.ibb.co.com/G2d09kj/lithuanialottery.png', target: 'warapper-timer-p71830-OKRU' }, //LITHUANIA
            { src: 'https://i.ibb.co.com/VTgggVr/uruguayprize.png', target: 'warapper-timer-p71831-OLRU' }, //URUGUAY
            { src: 'https://i.ibb.co.com/wRqH6Rz/cubaprize.png', target: 'warapper-timer-p71832-OZRU' }, //CUBA
            { src: 'https://i.ibb.co.com/RSfbyP7/islandiaprize.png', target: 'warapper-timer-p71833-OURU' }, //ISLANDIA
            { src: 'https://i.ibb.co.com/mDqQvCr/swissprize.png', target: 'warapper-timer-p71834-OWRU' }, //SWITZERLAND
            { src: 'https://i.ibb.co.com/BrtDCHt/venezuelaprize.png', target: 'warapper-timer-p75081-ZVRU' }, //VENEZUELA
            { src: 'https://i.ibb.co.com/xCj0wnc/italiaprize.png', target: 'warapper-timer-p75082-LTRU' }, //ITALIA
            { src: 'https://i.ibb.co.com/2SmHqXF/meksikoprize.png', target: 'warapper-timer-p75083-ARRU' }, //KROASIA
            { src: 'https://i.ibb.co.com/7rBMCXm/latviaprize.png', target: 'warapper-timer-p75084-LVRU' }, //LATVIA
            { src: 'https://i.ibb.co.com/mTRZ82x/albanialottery.png', target: 'warapper-timer-p75085-NLRU' }, //ALBANIA
            { src: 'https://i.ibb.co.com/XDr0hw2/armenialottery.png', target: 'warapper-timer-p75086-NRRU' }, //ARMENIA
            { src: 'https://i.ibb.co.com/t22ZyQ7/denmarklottery.png', target: 'warapper-timer-p75087-EMRU' }, //DENMARK
            { src: 'https://i.ibb.co.com/DzT2LPq/hungarialottery.png', target: 'warapper-timer-p75088-NHRU' }, //HUNGARIA
            { src: 'https://i.ibb.co.com/0BDjs9g/argentinalottery.png', target: 'warapper-timer-p75089-NTRU' }, //ARGENTINA
            { src: 'https://i.ibb.co.com/nzVCzNn/bolivialottery.png', target: 'warapper-timer-p75090-LBRU' }, //BOLIVIA
            { src: 'https://i.ibb.co.com/tYzyFWv/maltalottery.png', target: 'warapper-timer-p75091-MTRU' }, //MALTA
            { src: 'https://i.ibb.co.com/ZSbBhxy/polandialottery.png', target: 'warapper-timer-p75092-LDRU' }, //POLANDIA
            { src: 'https://i.ibb.co.com/SJykykW/honduraslottery.png', target: 'warapper-timer-p75093-UDRU' }, //HONDURAS
            { src: 'https://i.ibb.co.com/RQHGkTM/chilelottery.png', target: 'warapper-timer-p75094-ELRU' }, //CHILE
            { src: 'https://i.ibb.co.com/qNK6MtM/laoslottery.png', target: 'warapper-timer-p75095-LARU' }, //LAOS
            { src: 'https://i.ibb.co.com/8sk1Fft/austrialottery.png', target: 'warapper-timer-p75096-TDRU' }, //AUSTRIA
            { src: 'https://i.ibb.co.com/f0KmqCz/bulgarialottery.png', target: 'warapper-timer-p75097-GBRU' }, //BULGARIA
            { src: 'https://i.ibb.co.com/bH7KNX6/kolombialottery.png', target: 'warapper-timer-p65468-OMRU' }, //KOLOMBIA
            { src: 'https://i.ibb.co.com/0BmJy5T/estonialottery.png', target: 'warapper-timer-p65469-SORU' }, //ESTONIA
            { src: 'https://i.ibb.co.com/j6s2Ps3/serbialottery.png', target: 'warapper-timer-p65470-EBSU' }, //SERBIA
            { src: 'https://i.ibb.co.com/XzzWpd4/san-marino.png', target: 'warapper-timer-p65471-AMSU' }, //SANMARINO
            { src: 'https://i.ibb.co.com/brQ8rGX/myanmarprize.png', target: 'warapper-timer-p65472-YMRU' }, //MYANMAR
            { src: 'https://i.ibb.co.com/bXzRG0y/ekuadorlottery.png', target: 'warapper-timer-p66455-DFDF' }, //ECUADOR
            { src: 'https://i.ibb.co.com/56kJhYT/belarusialottery.png', target: 'warapper-timer-p66456-FDDD' }, //BELARUS
            { src: 'https://i.ibb.co.com/gTwH46x/luksemberglottery.png', target: 'warapper-timer-p66457-HHFD' }, //LUXEMBOURG
            { src: 'https://i.ibb.co.com/RQTrhVx/spanyollottery.png', target: 'warapper-timer-p66458-DFSD' }, //SPAIN
            { src: 'https://i.ibb.co.com/169vhy7/bruneidarussalamlottery.png', target: 'warapper-timer-p66459-AASA' }, //BRUNEI D
            { src: 'https://i.ibb.co.com/sjgJVvG/rumanialottery.png', target: 'warapper-timer-p66460-ASAW' }, //ROMANIA
            { src: 'https://i.ibb.co.com/QbtDjY8/brasillottery.png', target: 'warapper-timer-p68148-QARU' }, //BRAZIL
            { src: 'https://i.ibb.co.com/5jmX6ZY/meksikoprize.png', target: 'warapper-timer-p68149-QBRU' }, //MEXICO
            { src: 'https://i.ibb.co.com/PNp23Zf/vietnamprize.png', target: 'warapper-timer-p68150-QCRU' }, //VIETNAM
            { src: 'https://i.ibb.co.com/XFL18D5/turkiprize.png', target: 'warapper-timer-p68151-QDRU' }, //TURKEY
            { src: 'https://i.ibb.co.com/fktjCy6/yunaniprize.png', target: 'warapper-timer-p68152-QFRU' }, //YUNANI
            { src: 'https://i.ibb.co.com/RHChy5c/haitiprize.png', target: 'warapper-timer-p68153-QHRU' }, //HAITI
            { src: 'https://i.ibb.co.com/M9qCmzK/paraguayprize.png', target: 'warapper-timer-p68154-QIRU' }, //PARAGUAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyN9DI5aXEIMyLjOAcwfPG2ZYIy9tDttmL1EiUzZHMpJFuxd7ZAWeqwNkRo9nfQna9628lvR7-D47AhaJbYAHMMQ5u8tPJ8pJ9DQyXVujbMyYH0aR6O71nkoEZc7PBzO2TrJUfG-XCQ2T_YTc8YDD8nOJ49ysGSArjGuQANoRn8s1dPV8_Bpp1aM4mJbA/s1600/SINGAPORE.png', target: 'warapper-timer-p37731-KRPO' }, //SINGAPORE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh52N2fCDFvQocFH04Qxg9Lw-WUVLRPaUwPDB47yPvDvXun7K0Z7ELU9bqeR4kTBqZf65e3EPAaj3Z5c8Py_Yw1XiLR_omMdPk2jLXVeDeevJ3g76iqXqsh5w9q_CW3CFX0C-ONO73d1zdeulcUA1HlV9b43_26GADAJ82pEnwa2F_iNA2D2CmSIq3m9W0/s1600/CAMBODIA.png', target: 'warapper-timer-p37740-KRDA' }, //CAMBODIA
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdRSnVrM6jb4awThgtKodxxI1ibyUQrPB5y1-sKSuNxFhtBPehT912p04cewraavV_GxhNtxTwzoH5xrGzboSwkh03AHXgDfGAS1wXbAE4mTRV9gDl5GXMN0A3XYqBz_bnmKHUwgqxC0hYpq79A2pwwA4stbhHRZ7tiuemqTTvUVkMkwxJl3uE3rFRc9w/s1600/TAIWAN.png', target: 'warapper-timer-p37738-KRWI' }, //TAIWAN
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu2tzRC2mmSGqSk9MrgXT9lfWgz0TWSpebjhbmWl4Fh235FzbpFM5Za5H85esuGoO6e1ln_m0F6MCb5AdsPyXidKGyIjDdGy3XSMALmSm-v2LneH1xswtf12nLOjqKbRZyQKNdWmB9OjecKhxL7ST3mgkCo0Lpx0dvdmqMIMz76YD1VVlULCx3pJ57WYk/s1600/CHINA.png', target: 'warapper-timer-p37743-KRIA' }, //CHINA
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEV_7TuFBumUYvp5FdnhccZQj-MChmATY7T8CdA8V5v0TBvafO5L6gOUF4fOqaBbUdS4MD4pC02i_PPceBePadwzPSVJstarz6QcnWy0v3bzyggee9Kp2RcqhcSIb4LZ2qkjzpi4rI6UKSjud6nZ8mxgbkqZq64LKf6hUEKZewwWAdBHkPqLYCXgWEkCY/s1600/JAKARTA1444985a1c325907.png', target: 'warapper-timer-p37750-KRJK' }, //JAKARTA
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRpP90cgw8NPKG73paM1giyrNC3x7bMcYm_KGPh0bnpqFqhkmYigxEQAlR6t1iW9q7Z616OJycQccIiQkkNJlJLZ1TQYgFBddZLJ_U-YwZoAp5w2P_UWjdI0pCaDCJehqc5xyrW5oW7E_8tzkkhtWQ63hDtF0VW3wkZiiB5YsJF0WEgc1GuvhwLXFodYE/s1600/JAPAN.png', target: 'warapper-timer-p37744-KRPN' }, //JAPAN
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNBGxlg1QNddqAWjPrzqtxTy4AtbBMrasg0EacU8YfLNWsHOrb5m4SKlf2ka-R4XUGdFDoyiGMZ6nbh1e8Ue14WVVpDbW4TmXIDZ3jXd0Iww2jqlFHMoSDT0VdvxEKIb41utSlvQHspSTED3LxXHWfApQWnTivFxhv0DUm96bZE1M-9IefYQI4MWeonsE/s1600/PCSO.png', target: 'warapper-timer-p37739-KRSC' }, //PCSO
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtjkMjuW39l-JUXTF5Efwc-AjT1ZKQoP1-7na66NXXxOhEjpdrMnDmyEFhYQhzYvATzjx9opCkMJlayYHNVBnW9Q9URzpzXWPzu97ztB2RZKKeCFfCGc69EWYiQDfVrfoi2QeHCmKMF6CtD9E6Z5ow7ayyl0YbJ5PQGyVtjb9JQVjcjSmFSfxxcHO9CRU/s1600/KENTUCKYMID.png', target: 'warapper-timer-p37735-KRYU' }, //KENTUCKYMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw7PSPC_GwZP5OVxM_1_6ixIRMj2jRmFBXpoJfVWoFw6b8sJl4ggO2tSbRqL-J8pS4LIagNW-zQ1Dov0Wn81fA5nDH-5_DuatXoo4hS5F1VnBP_x-w-Ku_tOPlhzIdzG-kejZB_v-a0NE80KzI26DbRqaC-b4UmL7nFJ33FkQBQWAK_XUshQAl02Ht8pc/s1600/TEXAS.png', target: 'warapper-timer-p37719-KRTE' }, //TEXASDAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMzsxVrqs2zTblKDlQsF_mt-pKLETWW5dXhiwZUws5V87qShxDehDyJt4DAtg9jKyO1a6fXMU2Qlt9A5t0TjUlkNGjYotvd4Ed13PhtZiUKRx0dH_DhcmEerfGrOg5LYPEq1FKdAMe1VaZiSD7OE0-7uhB35CGl6n75oBhDD5XpsFfmQeYX_zaf1WPoQs/s1600/VIRGINIA_N.png', target: 'warapper-timer-p37726-KRYA' }, //VIRGINIADAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEJkLVhyphenhyphenRkhimC8Vym4_HrVX99Lr7zCg-X2WQYtP72bXC9WWUQkAT9CxKzW8dBkTld3Wzyb7nk3xAosLtvCh1jxs8mMWIDt52wgUPUJeiFEi3YiihksoNds6PxMw9T2Qx7MOVzYDX0siOi2zY510qNhvvhxOmxs18fp685AZKPiq_SOY_VoXiwUM8XS8/s1600/NORTCAROEVE.png', target: 'warapper-timer-p37728-KRNC' }, //NCDAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn5X-pMdn7QE_pOo76lf3senSE_QowpkyFW0c8n9gk9dDGaI5Qw-D8_0Z93fRP-__7RUY2yT5EyAPPEeEZakojqKBmhtGo32EsZd8yuDMCCrtLdn5-119aY_vHcsXHdASRRCcdtW9da9-fwQSC1oyCU0ijpN9yshW66vnaeMYjA6cJO6c18RqUNtzWthA/s1600/OREGON1.png', target: 'warapper-timer-p37722-KROR' }, //OREGON 1
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw7PSPC_GwZP5OVxM_1_6ixIRMj2jRmFBXpoJfVWoFw6b8sJl4ggO2tSbRqL-J8pS4LIagNW-zQ1Dov0Wn81fA5nDH-5_DuatXoo4hS5F1VnBP_x-w-Ku_tOPlhzIdzG-kejZB_v-a0NE80KzI26DbRqaC-b4UmL7nFJ33FkQBQWAK_XUshQAl02Ht8pc/s1600/TEXAS.png', target: 'warapper-timer-p37720-KRXA' }, //TEXASEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsbf5S-8nlVeQarUt2wAWqEUb47ahLQjjFefVZq_YnNeP-I3Gb3cQbJgyxS8GEIWx8vq-Q8GMq6gftRTIbYcrYtMXYv8C9oL6YYkXba2lq2VxecetXcNV9HW9RDyo_036s-f6aSiiKeR8Kx5xuXujoVigfpOnMy-kE0xAvzOn1Y7SGljcRV58pivrtUVw/s1600/GEORGIA.png', target: 'warapper-timer-p37766-AAEV' }, //GEORGIAEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglQeS6unpF4Cz_3elyMkw0orz0dHTNo5p2WtKxUSBj6FpymKRrxv_HRo5XihkrTmZGbjRI7LhFSXBSWN70htc96-xJsTLqbLyPV4-yeTtAYLbhNSLZZEvW-Ma5R3XFuznPUsJLdMmnYylBCxceiKcaxP5dkPq8PGMGLm8QFTaRULwxzW9Xm9b3O_BNEno/s1600/CALIFORNIA--CONV.png', target: 'warapper-timer-p37733-KRFO' }, //CALIFORNIA
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn5X-pMdn7QE_pOo76lf3senSE_QowpkyFW0c8n9gk9dDGaI5Qw-D8_0Z93fRP-__7RUY2yT5EyAPPEeEZakojqKBmhtGo32EsZd8yuDMCCrtLdn5-119aY_vHcsXHdASRRCcdtW9da9-fwQSC1oyCU0ijpN9yshW66vnaeMYjA6cJO6c18RqUNtzWthA/s1600/OREGON1.png', target: 'warapper-timer-p37724-KRGO' }, //OREGON 3
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtjkMjuW39l-JUXTF5Efwc-AjT1ZKQoP1-7na66NXXxOhEjpdrMnDmyEFhYQhzYvATzjx9opCkMJlayYHNVBnW9Q9URzpzXWPzu97ztB2RZKKeCFfCGc69EWYiQDfVrfoi2QeHCmKMF6CtD9E6Z5ow7ayyl0YbJ5PQGyVtjb9JQVjcjSmFSfxxcHO9CRU/s1600/KENTUCKYMID.png', target: 'warapper-timer-p37734-KRTN' }, //KENTUCKYEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMzsxVrqs2zTblKDlQsF_mt-pKLETWW5dXhiwZUws5V87qShxDehDyJt4DAtg9jKyO1a6fXMU2Qlt9A5t0TjUlkNGjYotvd4Ed13PhtZiUKRx0dH_DhcmEerfGrOg5LYPEq1FKdAMe1VaZiSD7OE0-7uhB35CGl6n75oBhDD5XpsFfmQeYX_zaf1WPoQs/s1600/VIRGINIA_N.png', target: 'warapper-timer-p37727-KRAI' }, //VIRGINIANIGH
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw7PSPC_GwZP5OVxM_1_6ixIRMj2jRmFBXpoJfVWoFw6b8sJl4ggO2tSbRqL-J8pS4LIagNW-zQ1Dov0Wn81fA5nDH-5_DuatXoo4hS5F1VnBP_x-w-Ku_tOPlhzIdzG-kejZB_v-a0NE80KzI26DbRqaC-b4UmL7nFJ33FkQBQWAK_XUshQAl02Ht8pc/s1600/TEXAS.png', target: 'warapper-timer-p37721-KRXS' }, //TEXASNIGHT
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEJkLVhyphenhyphenRkhimC8Vym4_HrVX99Lr7zCg-X2WQYtP72bXC9WWUQkAT9CxKzW8dBkTld3Wzyb7nk3xAosLtvCh1jxs8mMWIDt52wgUPUJeiFEi3YiihksoNds6PxMw9T2Qx7MOVzYDX0siOi2zY510qNhvvhxOmxs18fp685AZKPiq_SOY_VoXiwUM8XS8/s1600/NORTCAROEVE.png', target: 'warapper-timer-p37729-KRCE' }, //NCEVENING
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI02BinZDf8i0NBY3Pj9jEsp_eG9P33sCIPxim0thvqcHDGZ7V0IJ4b2oxUrS9hcxACfBOvyWx9MEw6hDgUU6J0fJjy_Ol-KjrmrsV3xmIA_hHDvkJ1qwXd3rn3OyrsZpHshd-7ne9yEQaWP2oi-g7S-nfqkm76XniPPSXOS_pZRluo_WGy4l6TaAhv2g/s1600/BULLSEYE.png', target: 'warapper-timer-p37741-KREE' }, //BULLSEYE
            { src: 'https://i.ibb.co.com/rtzM1cR/harvard.png', target: 'warapper-timer-p37765-AAAR' }, //HARVARD
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn5X-pMdn7QE_pOo76lf3senSE_QowpkyFW0c8n9gk9dDGaI5Qw-D8_0Z93fRP-__7RUY2yT5EyAPPEeEZakojqKBmhtGo32EsZd8yuDMCCrtLdn5-119aY_vHcsXHdASRRCcdtW9da9-fwQSC1oyCU0ijpN9yshW66vnaeMYjA6cJO6c18RqUNtzWthA/s1600/OREGON1.png', target: 'warapper-timer-p37725-KRON' }, //OREGON 4
            { src: 'https://i.ibb.co.com/pZXcDvr/colmar.png', target: 'warapper-timer-p37762-AACO' }, //COLMAR
            { src: 'https://i.ibb.co.com/ctkJLKT/pataya-1.png', target: 'warapper-timer-p37759-KRTT' }, //PATTAYA
            { src: 'https://i.ibb.co.com/wQLk4Qx/mawlamyine.png', target: 'warapper-timer-p37760-KRYI' }, //MAWLAMYINE
            { src: 'https://i.ibb.co.com/vX7zNgG/chonburi.png', target: 'warapper-timer-p37761-AACH' }, //CHONBURI
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4esIfdOJpE-tsPRW-SQQdl41rkARr8X5OHoGecmT7A-EoqYG9GBcGq0SZ9lGrOXMdoGEiCOhOawJX61i7Bqy5FGP7mWlyanrXEVHceSjZ4hrokbiU-yrcwkkO4-yrRy7ohDz2NxGmhDjA0xQ3aLG9hZ8dcTNoBC6r76L2SE_1fLRAwpS3_MbCXBKBwco/s1600/MONGOLIA.png', target: 'warapper-timer-p37749-KRGL' }, //MONGOLIA
            { src: 'https://i.ibb.co.com/JnjJ6xG/ulanbator.png', target: 'warapper-timer-p37764-AAUL' }, //ULANBATOR
            { src: 'https://i.ibb.co.com/2yxFTFM/hochiminh.png', target: 'warapper-timer-p37757-KRHC' }, //HOCHIMINH
            { src: 'https://i.ibb.co.com/MCT2njK/ventiane.png', target: 'warapper-timer-p37763-AAVI' }, //VIENTIANE
            { src: 'https://i.ibb.co.com/5F8sZQm/foshan.png', target: 'warapper-timer-p37756-KROS' }, //FOSHAN
            { src: 'https://i.ibb.co.com/Gnhmh0J/naypyidawpools.png', target: 'warapper-timer-p37758-KRYY' }, //NAYPYIDAW
            { src: 'https://i.ibb.co.com/WznH1pg/bangsaen.png', target: 'warapper-timer-p43365-BAKR' }, //BANG SAEN
            { src: 'https://i.ibb.co.com/b17SBmc/nagoyaprize.png', target: 'warapper-timer-p44661-HGRU' }, //NAGOYA
            { src: 'https://i.ibb.co.com/WDH3WtP/okayamaprize.png', target: 'warapper-timer-p44662-BHRU' }, //OKAYAMA
            { src: 'https://i.ibb.co.com/mzBK5P9/chengduprize.png', target: 'warapper-timer-p44668-SDRU' }, //CHENGDU
            { src: 'https://i.ibb.co.com/G54Vgw7/fukuokaprize.png', target: 'warapper-timer-p44669-WYRU' }, //FUKUOKA
            { src: 'https://i.ibb.co.com/G54Vgw7/fukuokaprize.png', target: 'warapper-timer-p44663-RTRU' }, //BURIRAM
            { src: 'https://i.ibb.co.com/vH7khbD/osakaprize.png', target: 'warapper-timer-p44666-TSRU' }, //OSAKA
            { src: 'https://i.ibb.co.com/D1YxvPp/ratchaburiprize.png', target: 'warapper-timer-p44667-SCRU' }, //RATCHABURI
            { src: 'https://i.ibb.co.com/gJgDL38/busanprize.png', target: 'warapper-timer-p44671-ESRU' }, //BUSAN
            { src: 'https://i.ibb.co.com/1XCxFby/chiangmaiprize.png', target: 'warapper-timer-p44664-SFRU' }, //CHIANGMAI
            { src: 'https://i.ibb.co.com/CtBShbm/gwangjuprize.jpg', target: 'warapper-timer-p44672-QWRU' }, //GWANGJU
            { src: 'https://i.ibb.co.com/S0FWwVJ/kawasakiprize.png', target: 'warapper-timer-p44670-UTRU' }, //KAWASAKI
            { src: 'https://i.ibb.co.com/JtScNCd/hiroshimaprize.png', target: 'warapper-timer-p44665-SHRU' }, //HIROSHIMA
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_gFCR-mp048cEUyLloOdDmpBCqCkss8rMTK3B8Zm9BRtWcPoNJGn5c3iDeUafR9nvesyrDPSM0MEwgSa8ClVQtlRtCcBk3DEK5iHES_THeIN3RSVocjvcUCAlwXKU2Lusicn0ax-G4XafQnPVa2MK5l5X0hdY2GF7oSiN6zG9UjNHimzOZQBIVmJxZks/s1600/MARYLAND-mid.png', target: 'warapper-timer-p37782-AAML' }, //MARYLANDMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoQJlRK0iYknifIpCQIG6MgSo6WF9RDCg0N7nfLLNEzK-R_llxWBf8_WlegRXtW2kjC7fiuRAwkw4F_lNyN1_S7Dp63YFAIGN8SN2UsE9IAEo3AJP0KRDYVcnbS7_s5WzouykooDAVUrFCXBZnDGZV_3myTTNAJn_J4WXcLGP7KcZj9q2gJ21SLEE3WOE/s1600/OHIO-MID.png', target: 'warapper-timer-p37779-KRYO' }, //OHIOMIDDAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirJnQMzWSxWvRaiq1B2PvOfyatUaKoaFeyVEfIaLuwjkCUOxt4iGb74iHmFmWVjtakzLGU5-NTytSbFo81TdfxVLqeFB0iKHOTSpIpeueljtU8ICWSy10IxUo7UMISHVo3PmGTgvNqiuc679LPnce6X9XBQ4DG8W8NqaN88mIP-Z8p-LzSotFg6lbeV58/s1600/MICHIGAN.png', target: 'warapper-timer-p37769-AAHG' }, //MICHIGANMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVvix0oqUdfzJXD5ua8qaVwLheds8YNSpFyKVBO9KKFMd6fBQKPSJLpeYdlEojBgRey9puJ4dDdZ7AdWGhGIvCnnaKcA7eYrpQOJ8keF9NqDlN6ll3kInFthMUdLBF9xkBbI705sexvyueGxyDYRFYhM_w-T_ZvZHwJ_p7oIGK2r021kEbncioSan8rag/s1600/NEWJERSEYEVE.png', target: 'warapper-timer-p37754-KRSE' }, //NJERSEYMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoC6Or5ZFapdmuHCYwd7MCcQ6ZDOtBs2vUw8131KIKIURDxDT1bIUcgtilN85TP3xAhET9wel2qC52ut0mVdh0m9_1014OOL-cz7i55OBoYC3f4jjX1BpoVidMaWdttchEgq7WOTz3-vS2a2EpEtMNpqgp5qY4wSTIpm7KfpGatd6uo8ZhuBVot98FaKA/s1600/TENNESSEE.png', target: 'warapper-timer-p37772-AAMI' }, //TENNESSEMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwCzGgV98LsIX-ZSvBw42rQzZhyphenhypheny1MGFWzYolhcz8eN0iEOMrnPknWblQwEs8V8OfBfed3v1shzTSa9HFtRSy-HAs7Wbua-2WqjMqDR0XHPI_u4wvtpS6r4488zZrS5EnQbULK7p_ixNOuO5Vl_IQ-P90jPnEumu_DqdO4QoFKEOWhInoVvkQC_tneCdE/s1600/INDIANAMID.png', target: 'warapper-timer-p37774-AADM' }, //INDIANAMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdmZUviowXx98LLcYKV86VodxbcejoCK8_M82lRRpA40BhyphenhyphenqhzAU_bonygYVYgVBYprMqFjj_A4jerwUQ3EoSRXIxLZlL2Uahnq1EdfV-QMEX0DrHJ7oJFzC_B4WwED86V6Xbxb9N1uNNKfTNg1odzuE-kNBPQH3pErDcJELRU8Jla8gnwEhNxBbBjmmE/s1600/ILLINOIS-eve.png', target: 'warapper-timer-p37716-KRLL' }, //ILLINOISMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYCr8YeoWDdUAuFMhvyxmKGB9pXGb_un905Mi96OHckuu5_WWsz_4lRXAX6fuJ1OxVhivs5teFe5f2fTN-lXGTLR3KleW_W8iRxk7ZKH-0wRLijp4x0y_N9PCzgCmP3zywSEbuplO7oFImsZLJW14MmJEAXlDFcqdTL70UlvQQKTs3Z2uvHNtFnC0QQOc/s1600/MISSOURIEVE.png', target: 'warapper-timer-p37717-KRMI' }, //MISSOURIMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFSJ1RP69yIdPEVQTKHs8N6W91go9ct_5B3gIYMiAj-wmuOi2sbRjO3x1N9TlPHUfwufnrn_IPl0X7fk01quWoED3BRsFU3eCjQ-Tw7ErEny9eIWqFw9GnFLWYBj2iEtyJZOLpUODS86_WrZ5Sn0OjspuBArnTv_C29wonvddcugDDvyEpP1hH4OfDvoo/s1600/DELAWARE.png', target: 'warapper-timer-p37784-AAWR' }, //DELAWAREDAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmL8WBdytrwkRHS82ZABRWuqcgOXGCfA4atgVkQsNBbP7fiHDbTatGRuc7uWEtuch18LUfnfDtbLCWoNQZj85KOaatvXXUhAXzebzOlVBLrK6XGJm0PJfcInG5SoXuleQhjVxw8ob7pDeK45-EHQU8FXzYErzQjrfYLmT3-jNi9jrrx2_rQYieyfmeQ9g/s1600/WISCONSIN.png', target: 'warapper-timer-p37780-KRNW' }, //WISCONSIN
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsvTfPICF6stfSOwAwonSUzJbNKBdFv-CQHhJXkxhu255tCQZnD2zrvPpERBAljLhqUCM7uW-UXjEqu8WQ9cdTwqYeLu-G8LKF-XWxpxjIP_FghUvev4UZ0Df1JdSib3OV_KQuPiFXE74RZQzE59VwFj3ChUrhyjKIpIfc-6D_r7Ros44AcDs7V-Nwrvw/s1600/NEWYORKEVE.png', target: 'warapper-timer-p37751-KRDD' }, //NYMIDDAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn5X-pMdn7QE_pOo76lf3senSE_QowpkyFW0c8n9gk9dDGaI5Qw-D8_0Z93fRP-__7RUY2yT5EyAPPEeEZakojqKBmhtGo32EsZd8yuDMCCrtLdn5-119aY_vHcsXHdASRRCcdtW9da9-fwQSC1oyCU0ijpN9yshW66vnaeMYjA6cJO6c18RqUNtzWthA/s1600/OREGON1.png', target: 'warapper-timer-p37723-KRRE' }, //OREGON 2
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoC6Or5ZFapdmuHCYwd7MCcQ6ZDOtBs2vUw8131KIKIURDxDT1bIUcgtilN85TP3xAhET9wel2qC52ut0mVdh0m9_1014OOL-cz7i55OBoYC3f4jjX1BpoVidMaWdttchEgq7WOTz3-vS2a2EpEtMNpqgp5qY4wSTIpm7KfpGatd6uo8ZhuBVot98FaKA/s1600/TENNESSEE.png', target: 'warapper-timer-p37771-AANN' }, //TENNESSEEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoQJlRK0iYknifIpCQIG6MgSo6WF9RDCg0N7nfLLNEzK-R_llxWBf8_WlegRXtW2kjC7fiuRAwkw4F_lNyN1_S7Dp63YFAIGN8SN2UsE9IAEo3AJP0KRDYVcnbS7_s5WzouykooDAVUrFCXBZnDGZV_3myTTNAJn_J4WXcLGP7KcZj9q2gJ21SLEE3WOE/s1600/OHIO-MID.png', target: 'warapper-timer-p37778-KROI' }, //OHIOEVENING
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirJnQMzWSxWvRaiq1B2PvOfyatUaKoaFeyVEfIaLuwjkCUOxt4iGb74iHmFmWVjtakzLGU5-NTytSbFo81TdfxVLqeFB0iKHOTSpIpeueljtU8ICWSy10IxUo7UMISHVo3PmGTgvNqiuc679LPnce6X9XBQ4DG8W8NqaN88mIP-Z8p-LzSotFg6lbeV58/s1600/MICHIGAN.png', target: 'warapper-timer-p37770-KRVN' }, //MICHIGANEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFSJ1RP69yIdPEVQTKHs8N6W91go9ct_5B3gIYMiAj-wmuOi2sbRjO3x1N9TlPHUfwufnrn_IPl0X7fk01quWoED3BRsFU3eCjQ-Tw7ErEny9eIWqFw9GnFLWYBj2iEtyJZOLpUODS86_WrZ5Sn0OjspuBArnTv_C29wonvddcugDDvyEpP1hH4OfDvoo/s1600/DELAWARE.png', target: 'warapper-timer-p37783-AAWD' }, //DELAWARENIGH
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzRpHpit0LVi9ii0O1gmtc5v-1BDprWnlVlpwyI4Q3Ee217u1bGmnbrA4XVTNcVoZJOSpF_oivxMlInwQuH3NMCZScn96_pg-mZPxxUETjZ7WI4vyEl82k91GV8GBjBNtFqj1ub0SST_V3n2PBGTAteb6yTpXGM3p__Sy_Fo-HrvPz2y-xvXoOkynXbuA/s1600/MARYLAND-eve.png', target: 'warapper-timer-p37781-AAYR' }, //MARYLANDEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbnrFd83xbdEI9ko2fR7PjVtrS9uuRiBK5_wODUrp8ynaQ1Y2MN0aM0Qcv1xpEbinPJ5AaCEULZ17Jlotm2lw-05HZDl4w_MQHGHAuQDRxUyqNXFf17o20E3RFjS5cMFNapMAbVL0orgedegV05ry2VGYdgmfA9GFSgNk36YuWImThp1x8QZqrHc5WYH0/s1600/FLORIDA-MID.png', target: 'warapper-timer-p37736-KRRI' }, //FLORIDAMID
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYCr8YeoWDdUAuFMhvyxmKGB9pXGb_un905Mi96OHckuu5_WWsz_4lRXAX6fuJ1OxVhivs5teFe5f2fTN-lXGTLR3KleW_W8iRxk7ZKH-0wRLijp4x0y_N9PCzgCmP3zywSEbuplO7oFImsZLJW14MmJEAXlDFcqdTL70UlvQQKTs3Z2uvHNtFnC0QQOc/s1600/MISSOURIEVE.png', target: 'warapper-timer-p37718-KRSS' }, //MISSOURIEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdmZUviowXx98LLcYKV86VodxbcejoCK8_M82lRRpA40BhyphenhyphenqhzAU_bonygYVYgVBYprMqFjj_A4jerwUQ3EoSRXIxLZlL2Uahnq1EdfV-QMEX0DrHJ7oJFzC_B4WwED86V6Xbxb9N1uNNKfTNg1odzuE-kNBPQH3pErDcJELRU8Jla8gnwEhNxBbBjmmE/s1600/ILLINOIS-eve.png', target: 'warapper-timer-p37715-KRIL' }, //ILLINOISEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVvix0oqUdfzJXD5ua8qaVwLheds8YNSpFyKVBO9KKFMd6fBQKPSJLpeYdlEojBgRey9puJ4dDdZ7AdWGhGIvCnnaKcA7eYrpQOJ8keF9NqDlN6ll3kInFthMUdLBF9xkBbI705sexvyueGxyDYRFYhM_w-T_ZvZHwJ_p7oIGK2r021kEbncioSan8rag/s1600/NEWJERSEYEVE.png', target: 'warapper-timer-p37753-KRER' }, //NJERSEYEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsbf5S-8nlVeQarUt2wAWqEUb47ahLQjjFefVZq_YnNeP-I3Gb3cQbJgyxS8GEIWx8vq-Q8GMq6gftRTIbYcrYtMXYv8C9oL6YYkXba2lq2VxecetXcNV9HW9RDyo_036s-f6aSiiKeR8Kx5xuXujoVigfpOnMy-kE0xAvzOn1Y7SGljcRV58pivrtUVw/s1600/GEORGIA.png', target: 'warapper-timer-p37767-AAGN' }, //GEORGIANGHT
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoC6Or5ZFapdmuHCYwd7MCcQ6ZDOtBs2vUw8131KIKIURDxDT1bIUcgtilN85TP3xAhET9wel2qC52ut0mVdh0m9_1014OOL-cz7i55OBoYC3f4jjX1BpoVidMaWdttchEgq7WOTz3-vS2a2EpEtMNpqgp5qY4wSTIpm7KfpGatd6uo8ZhuBVot98FaKA/s1600/TENNESSEE.png', target: 'warapper-timer-p37773-KRMR' }, //TENNESSEMRG
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbnrFd83xbdEI9ko2fR7PjVtrS9uuRiBK5_wODUrp8ynaQ1Y2MN0aM0Qcv1xpEbinPJ5AaCEULZ17Jlotm2lw-05HZDl4w_MQHGHAuQDRxUyqNXFf17o20E3RFjS5cMFNapMAbVL0orgedegV05ry2VGYdgmfA9GFSgNk36YuWImThp1x8QZqrHc5WYH0/s1600/FLORIDA-MID.png', target: 'warapper-timer-p37737-KRRO' }, //FLORIDAEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsvTfPICF6stfSOwAwonSUzJbNKBdFv-CQHhJXkxhu255tCQZnD2zrvPpERBAljLhqUCM7uW-UXjEqu8WQ9cdTwqYeLu-G8LKF-XWxpxjIP_FghUvev4UZ0Df1JdSib3OV_KQuPiFXE74RZQzE59VwFj3ChUrhyjKIpIfc-6D_r7Ros44AcDs7V-Nwrvw/s1600/NEWYORKEVE.png', target: 'warapper-timer-p37752-KRNN' }, //NYEVENING
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZKPHWUcPN-7Zya17Az8atjPr8oBrpSZm9NWR-1bu9iT6VEilSPVarau537V5aNXhs-QQKwQWdHZ2BLkntyK5cV3kKqZHuCDk4pnIbNhFbDAHhPjhGS51dm62N3_-yJOu8Jixkxy9TsD-KNtHmElue1YpR3p-pKNkK6-1pI7WiaybEr6_ZAnMjlJbXjbQ/s1600/INDIANAEVE.png', target: 'warapper-timer-p37775-AADV' }, //INDIANAEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg1j-CjxTIfyP6LNQJQnm4Jq_OOgPg5G0CxXyqJP-te-m-XwwfGn_pHjG4Q4d-nHp-W13r7XTmfRd1iPu-bF47ljkGTSukyj9EHT1c0eRtx8MqXwxBkQEzBoLdtGquWHNIFdBDR5CMKbooG_qnecXV4Sz_LeCiS2MxqQOiHnWuFCbYES-tm-lG4OOoWpI/s1600/PENSYLVANIA1.png', target: 'warapper-timer-p37940-BBRU' }, //PVANIADAY
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg1j-CjxTIfyP6LNQJQnm4Jq_OOgPg5G0CxXyqJP-te-m-XwwfGn_pHjG4Q4d-nHp-W13r7XTmfRd1iPu-bF47ljkGTSukyj9EHT1c0eRtx8MqXwxBkQEzBoLdtGquWHNIFdBDR5CMKbooG_qnecXV4Sz_LeCiS2MxqQOiHnWuFCbYES-tm-lG4OOoWpI/s1600/PENSYLVANIA1.png', target: 'warapper-timer-p37941-CCRU' }, //PVANIAEVE
            { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgRbjENYhI2IR2tnEBoqCXv2DWjNtdmY8nUL23U9EIP1aMfbvoyjEE-lQhtpw67CU-gGsoDrElbwktoZMvlbYzKWNU_QC3w2zAh93smIK86hXh8fQ8qnkAoQu7QRw2Yz91HA_vm7hUsX3Ryv5LqCvAxgqhewiY5-K2pbqcNMtncl0Bb-oLwosEex7wBH8/s1600/RHODE.png', target: 'warapper-timer-p37939-AARU' }, //RISLANDMID
        ];
        images.forEach(function (img) {
            $('<img class="gambar-togel" src="' + img.src + '">').insertBefore(img.target);
        });
    }); 
