export class ResultModel{
    private employerGroupCity: string;
    private ciy: string;
    private lastName: string;
    private socialSecurityNo: string;
    private dateOfBirth: string;
    private employerGroupName : string;
    private firstName: string;
    private country: string;
    private state: string;
    private poBoxNumber: string;
    private dateOfFullTimeHire: string;
    private zipCode: string;
    private hoursPerWeek: string;
    private emailAddress: string;
    private benifitDate: string;
    private occupation: string;
    private streetAddress: string;
    private areaCode: string;
    private qualifyingDate: string;
    private annualSalary: string;
    private male: string;
    private phoneNumber: string;

    setEmployerGroupCity(employerGroupCity: string){
        this.employerGroupCity = employerGroupCity;
    }

    setPhoneNumber(phoneNumber: string){
        this.phoneNumber = phoneNumber;
    }

    setCiy(ciy: string){
        this.ciy = ciy;
    }

    setLastName(lastName: string){
        this.lastName = lastName;
    }
    setDateOfBirth(dateOfBirth: string){
        this.dateOfBirth = dateOfBirth;
    }

    setEmployerGroupName(employerGroupName: string){
        this.employerGroupName = employerGroupName;
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }

    setCountry(country: string){
        this.country = country;
    }

    setPoBoxNumber(poBoxNumber: string){
        this.poBoxNumber = poBoxNumber;
    }

    setState(state: string){
        this.state = state;
    }

    setDateOfFullTimeHire(dateOfFullTimeHire: string){
        this.dateOfFullTimeHire = dateOfFullTimeHire;
    }

    setZipCode(zipCode: string){
        this.zipCode = zipCode;
    }

    setHoursPerWeek(hoursPerWeek: string){
        this.hoursPerWeek = hoursPerWeek;
    }

    setEmailAddress(emailAddress: string){
        this.emailAddress = emailAddress;
    }

    setBenifitDate(benifitDate: string){
        this.benifitDate = benifitDate;
    }

    setOccupation(occupation: string){
        this.occupation = occupation;
    }

    setStreetAddress(streetAddress: string){
        this.streetAddress = streetAddress;
    }

    setAreaCode(areaCode: string){
        this.areaCode = areaCode;
    }

    setQualifyingDate(qualifyingDate: string){
        this.qualifyingDate = qualifyingDate;
    }

    setAnnualSalary(annualSalary: string){
        this.annualSalary = annualSalary;
    }

    setmale(male: string){
        this.male = male;
    }

    setSocialSecurityNo(socialSecurityNo: string){
        this.socialSecurityNo = socialSecurityNo;
    }


    //

    getEmployerGroupCity(){
        return this.employerGroupCity;
    }

    getCiy(){
        return this.ciy;
    }

    getLastName(){
        return this.lastName;
    }
    getSocialSecurityNo(){
        return this.socialSecurityNo;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }
    getEmployerGroupName(){
        return this.employerGroupName;
    }
    getFirstName(){
        return this.firstName;
    }
    getCountry(){
        return this.country;
    }
    getPoBoxNumber(){
        return this.poBoxNumber;
    }
    getDateOfFullTimeHire(){
        return this.dateOfFullTimeHire;
    }
    getZipCode(){
        return this.zipCode;
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }
    getState(){
        return this.state;
    }

    getHoursPerWeek(){
        return this.hoursPerWeek;
    }
    getEmailAddress(){
        return this.emailAddress;
    }
    getOccupation(){
        return this.occupation;
    }
    getBenifitDate(){
        return this.benifitDate;
    }
    getStreetAddress(){
        return this.streetAddress;
    }
    getAreaCode(){
        return this.areaCode;
    }
    getQualifyingDate(){
        return this.qualifyingDate;
    }
    getAnnualSalary(){
        return this.annualSalary;
    }
    getMale(){
        return this.male;
    }

}